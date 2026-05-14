import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";

const MEDIA_DIR = new URL("../public/media", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");
const MAX_WIDTH = 1600;

const files = await readdir(MEDIA_DIR);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const inputPath = join(MEDIA_DIR, file);
  const { size: originalSize } = await stat(inputPath);

  if (ext === ".png") {
    const outputFile = basename(file, ext) + ".webp";
    const outputPath = join(MEDIA_DIR, outputFile);

    await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outputPath);

    const { size: newSize } = await stat(outputPath);
    console.log(
      `${file} → ${outputFile}  ${fmt(originalSize)} → ${fmt(newSize)}  (${pct(originalSize, newSize)})`
    );
  } else {
    const outputPath = inputPath;
    const tmp = outputPath + ".tmp";

    await sharp(inputPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(tmp);

    const { size: newSize } = await stat(tmp);
    const { rename } = await import("node:fs/promises");
    await rename(tmp, outputPath);

    console.log(
      `${file}  ${fmt(originalSize)} → ${fmt(newSize)}  (${pct(originalSize, newSize)})`
    );
  }
}

function fmt(bytes) {
  return bytes >= 1_000_000
    ? (bytes / 1_000_000).toFixed(1) + " MB"
    : (bytes / 1_000).toFixed(0) + " KB";
}

function pct(before, after) {
  return "-" + Math.round((1 - after / before) * 100) + "%";
}
