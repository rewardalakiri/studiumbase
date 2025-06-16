// generate-exports.js
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "src");
const WARNING = `// ⚠️ AUTO-GENERATED FILE. DO NOT EDIT.
// Run the export generation script to update exports.
`;

const EXPORTABLE_TSX_DIRS = ["blocks", "components", "ui", "pages", "themes"];
const EXPORTABLE_TS_DIRS = ["lib", "hooks"];
const IGNORED_DIRS = ["styles", "files", "icons"];

function getExportLines(dir, ext) {
  const files = fs.readdirSync(dir);
  return files
    .filter(
      (file) =>
        file.endsWith(ext) && !file.endsWith(".d.ts") && file !== "index.ts",
    )
    .map((file) => {
      const name = file.replace(ext, "");
      return `export * from './${name}';`;
    });
}

function writeIndexFile(dir, lines) {
  const fullPath = path.join(dir, "index.ts");
  const content = [WARNING, ...lines].join("\n") + "\n";

  if (fs.existsSync(fullPath)) {
    const existing = fs.readFileSync(fullPath, "utf8");
    if (existing === content) {
      console.log(`✅ ${path.relative(ROOT, fullPath)} — No changes`);
      return;
    }
  }

  fs.writeFileSync(fullPath, content, "utf8");
  console.log(`🔄 ${path.relative(ROOT, fullPath)} — Updated`);
}

function generateFolderIndexes() {
  const srcFolders = fs
    .readdirSync(ROOT)
    .filter((f) => fs.statSync(path.join(ROOT, f)).isDirectory());

  for (const folder of srcFolders) {
    if (IGNORED_DIRS.includes(folder)) continue;

    const fullPath = path.join(ROOT, folder);
    let ext = null;

    if (EXPORTABLE_TSX_DIRS.includes(folder)) ext = ".tsx";
    if (EXPORTABLE_TS_DIRS.includes(folder)) ext = ".ts";
    if (!ext) continue;

    const lines = getExportLines(fullPath, ext);

    // Add lucide-react export at the top of `ui/index.ts`
    if (folder === "ui") {
      const lucideLine = `export * from 'lucide-react';`;
      if (!lines.includes(lucideLine)) {
        lines.unshift(lucideLine);
      }
    }

    writeIndexFile(fullPath, lines);
  }
}

// Run the generator
console.log("\n🔧 Generating exports for folders only...\n");
generateFolderIndexes();
console.log("\n✅ Done.\n");
