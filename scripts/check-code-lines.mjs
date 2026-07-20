import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const CODE_EXTENSIONS = new Set([".css", ".js", ".mjs", ".ts", ".tsx"]);
const IGNORED_DIRECTORIES = new Set([".git", ".next", "node_modules"]);
const MAX_LINES = 300;

async function collectFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const path = join(directory, entry.name);

      if (entry.isDirectory()) {
        return IGNORED_DIRECTORIES.has(entry.name) ? [] : collectFiles(path);
      }

      return CODE_EXTENSIONS.has(extname(entry.name)) ? [path] : [];
    }),
  );

  return nested.flat();
}

const files = await collectFiles(process.cwd());
const violations = [];

for (const file of files) {
  const lines = (await readFile(file, "utf8")).split("\n").length;
  if (lines > MAX_LINES) violations.push(`${file}: ${lines} lines`);
}

if (violations.length > 0) {
  throw new Error(`Code files over ${MAX_LINES} lines:\n${violations.join("\n")}`);
}

console.log(`Checked ${files.length} code files; all are within ${MAX_LINES} lines.`);
