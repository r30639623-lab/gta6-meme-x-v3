// gta6-meme-x-01 entry program.
// The meme lives in the X post itself; this program only hands the
// post's address to the grader by copying POST.json from the repository
// root into the output directory the grader reads.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  const postFile = readFileSync(join(repoRoot, "POST.json"));
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "POST.json"), postFile);
} catch (err) {
  console.error(`could not hand POST.json to the grader: ${(err as Error).message}`);
  process.exit(1);
}
