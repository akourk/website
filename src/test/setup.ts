import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// jsdom has no layout, so scrollTo is unimplemented and ScrollToTop's effect
// prints a "Not implemented" warning on every route render.
window.scrollTo = () => undefined;
HTMLElement.prototype.scrollIntoView = () => undefined;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn((query: string): MediaQueryList => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => undefined,
    removeListener: () => undefined,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
    dispatchEvent: () => true,
  })),
});
