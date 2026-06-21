import { access, readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const outputDirectory = 'dist';
const basePath = '/leetcode-handbook';

async function collectHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? collectHtml(path) : (extname(path) === '.html' ? [path] : []);
  }))).flat();
}

function pageUrl(file) {
  const path = relative(outputDirectory, file).replaceAll('\\', '/');
  const route = path === 'index.html' ? '/' : `/${path.replace(/index\.html$/, '')}`;
  return new URL(`${basePath}${route}`, 'https://handbook.invalid');
}

async function targetExists(pathname) {
  const localPath = decodeURIComponent(pathname.slice(basePath.length)).replace(/^\//, '');
  const candidates = pathname.endsWith('/')
    ? [join(outputDirectory, localPath, 'index.html')]
    : [join(outputDirectory, localPath), join(outputDirectory, localPath, 'index.html')];

  for (const candidate of candidates) {
    try {
      await access(candidate);
      return true;
    } catch {}
  }
  return false;
}

const failures = [];
for (const file of await collectHtml(outputDirectory)) {
  const html = await readFile(file, 'utf8');
  const source = pageUrl(file);

  for (const match of html.matchAll(/\bhref=(?:"([^"]+)"|'([^']+)')/g)) {
    const href = match[1] ?? match[2];
    if (!href || href.startsWith('#') || /^(?:mailto|tel|javascript):/.test(href)) continue;

    const target = new URL(href, source);
    if (target.origin !== source.origin) continue;
    if (target.pathname !== basePath && !target.pathname.startsWith(`${basePath}/`)) {
      failures.push(`${relative(outputDirectory, file)}: ${href} escapes base path ${basePath}`);
      continue;
    }
    if (!(await targetExists(target.pathname))) {
      failures.push(`${relative(outputDirectory, file)}: ${href} does not resolve to a built file`);
    }
  }
}

if (failures.length > 0) {
  console.error(`Internal link check failed:\n${failures.map((failure) => `- ${failure}`).join('\n')}`);
  process.exit(1);
}
console.log('Internal link check passed.');
