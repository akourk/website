// Runs axe-core against the exact markup the prerenderer writes to disk, for
// every route including the 404 page, and fails on anything axe rates serious
// or critical.
//
// It renders through entry-server rather than reading dist/, so `npm test` does
// not depend on a build having happened first. The markup is identical: both go
// through the same render() function.
import { afterEach, describe, expect, test } from 'vitest';
import axe from 'axe-core';
import type { Result } from 'axe-core';

import { render as renderRoute, routes } from '../entry-server';

const BLOCKING_IMPACTS = new Set(['serious', 'critical']);

const describeViolations = (violations: Result[]) => violations
  .map((v) => {
    const targets = v.nodes.map((n) => `      ${n.target.join(' ')}`).join('\n');
    return `  [${v.impact ?? 'unknown'}] ${v.id}: ${v.help}\n    ${v.helpUrl}\n${targets}`;
  })
  .join('\n\n');

const auditRoute = async (path: string) => {
  const { html, head } = await renderRoute(path);
  // The hoisted metadata belongs in the head, the same split the prerenderer
  // makes, so axe audits the document a reader would actually be served.
  document.head.insertAdjacentHTML('beforeend', head);
  document.body.innerHTML = `<div id="root">${html}</div>`;

  const results = await axe.run(document.body, {
    resultTypes: ['violations'],
    rules: {
      // jsdom has no layout engine, so axe cannot measure rendered colours and
      // reports every contrast check as "incomplete". The palette is checked
      // numerically in Contrast.test.ts instead.
      'color-contrast': { enabled: false },
    },
  });

  return results.violations.filter((v) => BLOCKING_IMPACTS.has(v.impact ?? ''));
};

afterEach(() => {
  document.body.innerHTML = '';
  document.head.querySelectorAll('title, meta, link').forEach((el) => { el.remove(); });
});

describe('axe-core, prerendered routes', () => {
  test.each(routes.map(({ path }) => path))('%s has no serious or critical violations', async (path) => {
    const violations = await auditRoute(path);
    expect(violations, `\n${describeViolations(violations)}\n`).toHaveLength(0);
  });

  test('the 404 page has no serious or critical violations', async () => {
    const violations = await auditRoute('/__not-found__');
    expect(violations, `\n${describeViolations(violations)}\n`).toHaveLength(0);
  });
});
