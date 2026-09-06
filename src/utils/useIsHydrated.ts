import { useSyncExternalStore } from 'react';

// Nothing to subscribe to: the value changes exactly once, when React hydrates,
// and React re-reads the snapshot itself at that point.
const unsubscribe = () => undefined;
const subscribe = () => unsubscribe;
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * False while server-rendering and during hydration, true afterwards.
 *
 * For markup that only makes sense once JavaScript is running. Rendering it
 * straight away would either be wasted bytes in the prerendered HTML or, worse,
 * a hydration mismatch; a flag set in an effect would be a synchronous setState
 * in an effect. This is the primitive React provides for the question.
 */
const useIsHydrated = (): boolean => useSyncExternalStore(
  subscribe,
  getSnapshot,
  getServerSnapshot,
);

export default useIsHydrated;
