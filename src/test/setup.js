import '@testing-library/jest-dom/vitest';

// jsdom has no layout, so scrollTo is unimplemented and ScrollToTop's effect
// prints a "Not implemented" warning on every route render.
window.scrollTo = () => {};
