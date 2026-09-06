// axe cannot check colour contrast in jsdom: there is no layout engine, so it
// reports every contrast rule as "incomplete" rather than pass or fail. The
// ratios are arithmetic, though, so they can be checked directly.
//
// This covers the pairs that actually appear on the page. The skill chart is the
// interesting one: it draws white text on a category colour, and five of the
// eleven original colours failed, the worst at 2.03:1.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, test } from 'vitest';

import { categories } from '../data/resume/skills';

// Read from disk rather than importing: Vitest resolves stylesheet imports to
// empty strings, `?raw` included, because it does not process CSS by default.
// Vitest runs with the project root as its working directory.
const tokens = readFileSync(resolve('src/static/css/_tokens.scss'), 'utf8');

const channel = (value: number) => {
  const v = value / 255;
  return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex: string) => {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

/** WCAG 2.x relative contrast between two opaque colours. */
export const contrastRatio = (a: string, b: string) => {
  const [lighter, darker] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (lighter + 0.05) / (darker + 0.05);
};

/** Reads a colour custom property so the test tracks the real token. */
const palette = (name: string) => {
  const match = new RegExp(`^\\s*--${name}:\\s*(#[0-9a-fA-F]{3,8});`, 'm').exec(tokens);
  if (!match) throw new Error(`No --${name} colour in _tokens.scss`);
  return match[1];
};

const AA_TEXT = 4.5;

describe('palette contrast, WCAG 2.2 AA', () => {
  test.each([
    ['ink', 'paper'],
    ['ink', 'paper-sunk'],
    ['ink-strong', 'paper'],
    ['ink-muted', 'paper'],
    ['ink-muted', 'paper-sunk'],
    ['accent', 'paper'],
    ['accent', 'paper-sunk'],
    ['accent-strong', 'paper'],
    // Reversed out: the button and the active filter chip.
    ['paper', 'ink-strong'],
  ])('%s on %s clears 4.5:1', (fg, bg) => {
    const ratio = contrastRatio(palette(fg), palette(bg));
    expect(ratio, `${fg} (${palette(fg)}) on ${bg} (${palette(bg)}) is ${ratio.toFixed(2)}:1`)
      .toBeGreaterThanOrEqual(AA_TEXT);
  });
});

describe('skill chart contrast', () => {
  test.each(categories.map((c) => [c.name, c.color]))(
    '%s bars carry white text at 4.5:1 or better',
    (name, color) => {
      const ratio = contrastRatio(color, '#ffffff');
      expect(ratio, `${name} (${color}) against white text is ${ratio.toFixed(2)}:1`)
        .toBeGreaterThanOrEqual(AA_TEXT);
    },
  );

  test('every category has a colour', () => {
    expect(categories.every((c) => /^#[0-9a-f]{6}$/i.test(c.color))).toBe(true);
  });
});
