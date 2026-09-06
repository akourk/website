import { useSyncExternalStore } from 'react';

/** An external store holding a value that changes on a timer. */
export interface TickingStore<T> {
  subscribe: (onStoreChange: () => void) => () => void;
  getSnapshot: () => T | undefined;
  getServerSnapshot: () => undefined;
}

/**
 * Creates a store for a value that only exists in the browser and changes over
 * time, such as a clock.
 *
 * The snapshot is undefined until something subscribes, which means the server
 * and the first client render both see undefined. That is deliberate: pages are
 * prerendered at build time, so computing a clock during render would bake a
 * stale number into the HTML and hydration would find a different one.
 *
 * Call this at module scope. The timer is shared by every subscriber and stops
 * when the last one goes away.
 */
export const createTickingStore = <T>(compute: () => T, intervalMs: number): TickingStore<T> => {
  const listeners = new Set<() => void>();
  let snapshot: T | undefined;
  let timer: ReturnType<typeof setInterval> | undefined;

  const tick = () => {
    snapshot = compute();
    listeners.forEach((listener) => { listener(); });
  };

  return {
    subscribe: (onStoreChange) => {
      listeners.add(onStoreChange);
      if (timer === undefined) {
        snapshot = compute();
        timer = setInterval(tick, intervalMs);
      }

      return () => {
        listeners.delete(onStoreChange);
        if (listeners.size === 0 && timer !== undefined) {
          clearInterval(timer);
          timer = undefined;
        }
      };
    },
    // Returns the same value until the timer actually changes it, or React
    // would re-render forever.
    getSnapshot: () => snapshot,
    getServerSnapshot: () => undefined,
  };
};

/** Reads a ticking store, undefined on the server and until the first tick. */
export const useTickingValue = <T>(store: TickingStore<T>): T | undefined => useSyncExternalStore(
  store.subscribe,
  store.getSnapshot,
  store.getServerSnapshot,
);
