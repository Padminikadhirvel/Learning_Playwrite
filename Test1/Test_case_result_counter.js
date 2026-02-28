let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let passCount = 0;
let failCount = 0;
let skipCount = 0;
for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "pass") {
        passCount++;
    } else if (testResults[i] === "fail") {
        failCount++;
    } else if (testResults[i] === "skip") {
        skipCount++;
    }
}
console.log("Total Tests:", testResults.length);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Skipped:", skipCount);
let passPercentage = (passCount / testResults.length) * 100;
console.log("Pass Rate:", passPercentage + "%");
if(passCount===testResults.length){
    console.log("Ready for release");
}else if (failCount<=2){
    console.log("VERDICT: Minor failures. Review before release.");
}else{
    console.log("Block release");
}