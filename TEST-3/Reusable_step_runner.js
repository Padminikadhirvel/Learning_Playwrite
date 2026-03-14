
function runStep(stepName, actionFn) {
  console.log("Starting step:", stepName);

  try {
    const result = actionFn();
    return {
      stepName,
      passed: true,
      message: result
    };
  } catch (error) {
    return {
      stepName,
      passed: false,
      message: error.message
    };
  }
}

const result = runStep("open dashboard", () => "Page loaded");

console.log(result);