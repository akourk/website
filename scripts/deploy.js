// Publish the built site using Git directly, without a globbing dependency.
// All file replacement happens in a disposable checkout, never the source repo.
import { execFileSync } from 'node:child_process';
import { cpSync, existsSync, mkdtempSync, readdirSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const source = process.cwd();
const dist = resolve(source, 'dist');
const branch = 'gh-pages';
const git = (cwd, ...args) => execFileSync('git', args, {
  cwd,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
}).trim();

if (!existsSync(join(dist, 'index.html')) || !statSync(join(dist, 'index.html')).isFile()) {
  throw new Error('Build the site before deploying: dist/index.html is missing.');
}
if (existsSync(join(dist, '.git'))) {
  throw new Error('The build output must not contain Git metadata.');
}

const remote = git(source, 'remote', 'get-url', 'origin');
const name = git(source, 'config', 'user.name');
const email = git(source, 'config', 'user.email');
const checkout = mkdtempSync(join(tmpdir(), 'website-deploy-'));

try {
  git(checkout, 'init', '--quiet');
  git(checkout, 'remote', 'add', 'origin', remote);
  const existing = git(checkout, 'ls-remote', '--heads', 'origin', `refs/heads/${branch}`);
  if (existing) {
    git(checkout, 'fetch', '--depth=1', 'origin', branch);
    git(checkout, 'checkout', '--quiet', '-b', branch, 'FETCH_HEAD');
  } else {
    git(checkout, 'checkout', '--quiet', '--orphan', branch);
  }

  for (const entry of readdirSync(checkout)) {
    if (entry !== '.git') rmSync(join(checkout, entry), { recursive: true, force: true });
  }
  cpSync(dist, checkout, { recursive: true });
  git(checkout, 'add', '--all', '--', '.');

  if (git(checkout, 'diff', '--cached', '--name-only')) {
    git(checkout, '-c', `user.name=${name}`, '-c', `user.email=${email}`, 'commit', '--quiet', '-m', 'Updates');
    // A concurrent deployment must fail rather than overwrite newer history.
    git(checkout, 'push', 'origin', `HEAD:refs/heads/${branch}`);
    process.stdout.write('Published dist/ to gh-pages.\n');
  } else {
    process.stdout.write('The published site is already up to date.\n');
  }
} finally {
  rmSync(checkout, { recursive: true, force: true });
}
