// axe cannot check colour contrast in jsdom: there is no layout engine, so it
// reports every contrast rule as "incomplete" rather than pass or fail. The
// ratios are arithmetic, though, so they can be checked directly, for both
// themes, against the token values the stylesheet actually uses.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, test } from 'vitest';

// Read from disk rather than importing: Vitest resolves stylesheet imports to
// empty strings, `?raw` included, because it does not process CSS by default.
// Vitest runs with the project root as its working directory.
const tokens = readFileSync(resolve('src/static/css/_tokens.scss'), 'utf8');

/**
 * The two token blocks in _tokens.scss: the `:root` rule holds the light theme,
 * the `dark-tokens` mixin holds what the dark theme overrides. Both end at a
 * closing brace in the first column.
 */
const block = (opener: string) => {
  const start = tokens.indexOf(opener);
  if (start === -1) throw new Error(`No "${opener}" block in _tokens.scss`);
  const end = tokens.indexOf('\n}', start);
  return tokens.slice(start, end);
};

const light = block(':root {');
const dark = block('@mixin dark-tokens {');

const colorFrom = (source: string, name: string) => {
  const match = new RegExp(`^\\s*--${name}:\\s*(#[0-9a-fA-F]{3,8});`, 'm').exec(source);
  return match?.[1];
};

/** A theme's value for a token, falling back to the light value it inherits. */
const palette = (theme: 'light' | 'dark', name: string): string => {
  const value = theme === 'dark'
    ? colorFrom(dark, name) ?? colorFrom(light, name)
    : colorFrom(light, name);
  if (!value) throw new Error(`No --${name} colour in _tokens.scss`);
  return value;
};

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

const AA_TEXT = 4.5;
const AA_NON_TEXT = 3;
const themes = ['light', 'dark'] as const;

const textPairs = [
  ['ink', 'paper'],
  ['ink', 'paper-sunk'],
  ['ink-strong', 'paper'],
  ['ink-muted', 'paper'],
  ['ink-muted', 'paper-sunk'],
  ['accent', 'paper'],
  ['accent', 'paper-sunk'],
  ['accent-strong', 'paper'],
  // Reversed out: the download button on the resume page.
  ['paper', 'ink-strong'],
] as const;

describe.each(themes)('%s theme, WCAG 2.2 AA', (theme) => {
  test.each(textPairs)('%s on %s clears 4.5:1', (fg, bg) => {
    const [a, b] = [palette(theme, fg), palette(theme, bg)];
    const ratio = contrastRatio(a, b);
    expect(ratio, `${theme}: ${fg} (${a}) on ${bg} (${b}) is ${ratio.toFixed(2)}:1`)
      .toBeGreaterThanOrEqual(AA_TEXT);
  });

  // 1.4.11: the edge of a control is how you know it is one.
  test('control borders clear 3:1 against the page', () => {
    const [border, bg] = [palette(theme, 'control-border'), palette(theme, 'paper')];
    const ratio = contrastRatio(border, bg);
    expect(ratio, `${theme}: control-border (${border}) on paper (${bg}) is ${ratio.toFixed(2)}:1`)
      .toBeGreaterThanOrEqual(AA_NON_TEXT);
  });
});
