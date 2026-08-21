import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceRoot = path.join(root, 'src');
const languages = ['en', 'te', 'hi', 'ta', 'kn', 'ml', 'mr', 'bn', 'gu', 'pa', 'or', 'as', 'ur'];
const sourceFiles = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) sourceFiles.push(fullPath);
  }
}

walk(sourceRoot);
const source = sourceFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
const keys = new Set([...source.matchAll(/\bt\(['"]([^'"]+)['"]\)/g)].map((match) => match[1]));
const i18n = fs.readFileSync(path.join(sourceRoot, 'lib', 'i18n.ts'), 'utf8');
const missingByLanguage = {};

function keysIn(block) {
  return new Set([...block.matchAll(/(?:^|[,\n{])\s*([A-Za-z][\w]*)\s*:/g)].map((match) => match[1]));
}

for (const language of languages) {
  const block = language === 'en'
    ? i18n.match(/\r?\n\s*en:\s*\{([\s\S]*?)\r?\n\s*\},\r?\n\s*te:/)?.[1] ?? ''
    : i18n.match(new RegExp(`\\r?\\n\\s*${language}:\\s*\\{([\\s\\S]*?)\\r?\\n\\s*\\},`))?.[1] ?? '';
  const localeKeys = keysIn(block);
  const missing = [...keys].filter((key) => !localeKeys.has(key));
  if (missing.length) missingByLanguage[language] = missing;
}

console.log(`Translation keys referenced by source: ${keys.size}`);
for (const language of languages) {
  const missing = missingByLanguage[language] ?? [];
  console.log(`${language}: ${missing.length ? `missing ${missing.length}` : 'complete'}`);
  if (missing.length) console.log(`  ${missing.join(', ')}`);
}

if (Object.keys(missingByLanguage).length) process.exitCode = 1;
