const THEME_KEY = 'theme';

type Theme = 'light' | 'dark';

const readStoredTheme = (): Theme | null => {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch {
    // Private browsing, or storage disabled. Fall back to the system preference.
    return null;
  }
};

const effectiveTheme = (): Theme => readStoredTheme()
  ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
  </svg>
);

/**
 * Light and dark, following the system until the reader says otherwise.
 *
 * Deliberately holds no React state. Which label is live is decided by CSS, from
 * the same three rules that pick the palette, so the prerendered HTML is correct
 * for whichever theme the reader lands in and hydration has nothing to disagree
 * about. The hidden half is display:none, so the button has exactly one
 * accessible name, and it names the action rather than the current state.
 */
const ThemeToggle = () => {
  const toggle = () => {
    const next: Theme = effectiveTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage unavailable: the choice holds for this page and no longer.
    }
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggle}>
      <span className="theme-toggle__option theme-toggle__to-dark">
        <MoonIcon />
        <span className="screen-reader-only">Switch to dark theme</span>
      </span>
      <span className="theme-toggle__option theme-toggle__to-light">
        <SunIcon />
        <span className="screen-reader-only">Switch to light theme</span>
      </span>
    </button>
  );
};

export default ThemeToggle;
