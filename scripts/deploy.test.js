import assert from 'node:assert/strict';
import { execFileSync, spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const script = fileURLToPath(new URL('./deploy.js', import.meta.url));
const git = (cwd, ...args) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();

test('publishing preserves history, replaces old assets, includes dotfiles, and skips unchanged builds', (t) => {
  const root = mkdtempSync(join(tmpdir(), 'website-deploy-test-'));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const remote = join(root, 'remote.git');
  const source = join(root, 'source');
  const dist = join(source, 'dist');
  git(root, 'init', '--quiet', '--bare', remote);
  mkdirSync(dist, { recursive: true });
  git(source, 'init', '--quiet', '--initial-branch=main');
  git(source, 'config', 'user.name', 'Deployment Test');
  git(source, 'config', 'user.email', 'deployment@example.com');
  git(source, 'remote', 'add', 'origin', remote);
  writeFileSync(join(source, 'source-only.txt'), 'Must never be deployed');
  git(source, 'add', '.');
  git(source, 'commit', '--quiet', '-m', 'Source commit');
  const sourceHead = git(source, 'rev-parse', 'HEAD');
  const deploy = () => execFileSync(process.execPath, [script], { cwd: source, encoding: 'utf8' });
  const published = (path) => git(remote, 'show', `gh-pages:${path}`);

  writeFileSync(join(dist, 'index.html'), '<h1>First build</h1>');
  writeFileSync(join(dist, '.nojekyll'), '');
  writeFileSync(join(dist, 'old.js'), 'old asset');
  assert.match(deploy(), /Published/);
  assert.equal(published('index.html'), '<h1>First build</h1>');
  assert.equal(published('.nojekyll'), '');
  const firstHead = git(remote, 'rev-parse', 'gh-pages');

  rmSync(join(dist, 'old.js'));
  writeFileSync(join(dist, 'index.html'), '<h1>Second build</h1>');
  writeFileSync(join(dist, '-asset.js'), 'dash-prefixed asset');
  mkdirSync(join(dist, 'nested folder'));
  writeFileSync(join(dist, 'nested folder', 'asset.txt'), 'nested asset');
  assert.match(deploy(), /Published/);
  assert.equal(git(remote, 'rev-parse', 'gh-pages^'), firstHead);
  assert.equal(published('index.html'), '<h1>Second build</h1>');
  assert.equal(published('-asset.js'), 'dash-prefixed asset');
  assert.equal(published('nested folder/asset.txt'), 'nested asset');
  assert.equal(published('.nojekyll'), '');
  const files = git(remote, 'ls-tree', '-r', '--name-only', 'gh-pages').split('\n');
  assert.ok(!files.includes('old.js'));
  assert.ok(!files.includes('source-only.txt'));
  assert.equal(git(source, 'rev-parse', 'HEAD'), sourceHead);
  assert.equal(git(source, 'branch', '--show-current'), 'main');

  const secondHead = git(remote, 'rev-parse', 'gh-pages');
  assert.match(deploy(), /already up to date/);
  assert.equal(git(remote, 'rev-parse', 'gh-pages'), secondHead);

  rmSync(join(dist, 'index.html'));
  const missingBuild = spawnSync(process.execPath, [script], { cwd: source, encoding: 'utf8' });
  assert.notEqual(missingBuild.status, 0);
  assert.match(missingBuild.stderr, /dist\/index.html is missing/);
  assert.equal(git(remote, 'rev-parse', 'gh-pages'), secondHead);

  writeFileSync(join(dist, 'index.html'), '<h1>Invalid build</h1>');
  mkdirSync(join(dist, '.git'));
  const invalidBuild = spawnSync(process.execPath, [script], { cwd: source, encoding: 'utf8' });
  assert.notEqual(invalidBuild.status, 0);
  assert.match(invalidBuild.stderr, /must not contain Git metadata/);
  assert.equal(git(remote, 'rev-parse', 'gh-pages'), secondHead);
});
