/** Resolve an anchor without treating its text as a CSS selector. */
const hashTarget = (hash: string): HTMLElement | null => {
  if (!hash || hash === '#') return null;
  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)));
  } catch {
    return null;
  }
};

/** Make an anchor visible, including when a disclosure was closed manually. */
export const revealHashTarget = (hash: string): HTMLElement | null => {
  const target = hashTarget(hash);
  let disclosure = target?.closest('details');
  while (disclosure) {
    disclosure.open = true;
    disclosure = disclosure.parentElement?.closest('details') ?? null;
  }
  return target;
};

export default hashTarget;
