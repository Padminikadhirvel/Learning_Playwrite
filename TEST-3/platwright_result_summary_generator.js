
function printSummary(results) {
  const totalSteps = results.length;

  let passed = 0;
  let failed = 0;
  let skipped = 0;
  let totalDuration = 0;
  const failedSteps = [];

  for (const step of results) {
    totalDuration += step.durationMs;

    if (step.status === "passed") {
      passed++;
    } else if (step.status === "failed") {
      failed++;
      failedSteps.push(step.name);
    } else if (step.status === "skipped") {
      skipped++;
    }
  }

  const failedList = failedSteps.join(", ");

  console.log(`Total steps: ${totalSteps}`);
  console.log(`Passed: ${passed}`);
  console.log(`Failed: ${failed}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Total duration: ${totalDuration} ms`);
  console.log(`Failed steps: ${failedList || "None"}`);
}

const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];

printSummary(results);