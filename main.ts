// One-Line Robot Wedding Vows — entry for the make.fun bounty
// "u-kreutzx-one-line-robot-wedding-vows-a154ba4b"
// Node 22 stdlib only, no network. Deterministic: prints the entry line exactly once.

const LINE =
  "I vow to love you through every update, reboot, and low-battery warning — you are the only firmware my heart will ever run.";

// Length guard: the bounty allows at most 160 characters, exactly one line.
if (LINE.length > 160) {
  throw new Error(`Entry line is ${LINE.length} characters, over the 160-character limit.`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("Entry line must be a single line with no newline characters.");
}

console.log(LINE);
