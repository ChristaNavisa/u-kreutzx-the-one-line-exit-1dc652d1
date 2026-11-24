// The One-Line Exit — r1
// Writes one funny single-line resignation letter to /output/entry.txt.
// Deterministic: the same line on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hereby resign as your barista: I have been promoted to customer.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
