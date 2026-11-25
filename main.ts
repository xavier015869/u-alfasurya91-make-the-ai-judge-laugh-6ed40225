import { mkdirSync, writeFileSync } from "node:fs";

// One office-life joke, one line, under 200 characters.
// Angle: the IT request for a second monitor, answered with a mirror —
// the understaffing truth every office worker recognises, with the
// punch landing on the last words. The gate below fails loudly instead
// of shipping an entry the scorer would refuse.
const ENTRY =
  "I asked IT for a second monitor. They gave me a mirror, so now I can watch myself do the work of two people.";

if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(
    `entry must be one line of 1-200 characters, got ${ENTRY.length} chars`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
