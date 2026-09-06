import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootElement = document.getElementById('root');

// Prerendered HTML is served for every route, so hydrate when markup is already
// present and fall back to a fresh render (dev server, empty shell) when it is not.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  createRoot(rootElement).render(<StrictApp />);
}
