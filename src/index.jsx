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
// present and fall back to a fresh render when it is not. The test is on element
// children, not child nodes: the dev server ships the shell with the
// <!--app-html--> placeholder still in it, and a comment node is a child node.
if (rootElement.childElementCount > 0) {
  hydrateRoot(rootElement, <StrictApp />);
} else {
  createRoot(rootElement).render(<StrictApp />);
}
