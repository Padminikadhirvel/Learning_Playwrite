
function getExecutionPlan(allBrowsers, blockedBrowsers) {
  const runnable = [];
  const blocked = [];

  for (let browser of allBrowsers) {
    if (blockedBrowsers.includes(browser)) {
      blocked.push(browser);
    } else {
      runnable.push(browser);
    }
  }

  const plan = "Run on: " + runnable.join(", ") +
               " | Skip: " + blocked.join(", ");

  return {
    runnable: runnable,
    blocked: blocked,
    plan
  };
}

const allBrowsers = ["chromium", "firefox", "webkit"];
const blockedBrowsers = ["firefox"];

console.log(getExecutionPlan(allBrowsers, blockedBrowsers));