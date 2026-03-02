var totaltest=0;
var passCount=0;
var failCount=0;
var errorCount=0;

const testprefix="TC"
const PASS_ICON = "✅";
const FAIL_ICON = "❌";
const ERROR_ICON = "⚠️";

const testCases = [
  { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
  { name: "User role is admin", actual: "admin", expected: "admin", type: "looseEqual" },
  { name: "Response is number", actual: 500, expected: "string", type: "typeCheck" },
  { name: "Feature flag enabled", actual: true, expected: true, type: "truthy" },
  { name: "Response time below limit", actual: 180, expected: 200, type: "lessThan" }
];
const results = [];
for(let i=0;i<testCases.length;i++){
    totaltest++;
    const tc=testCases[i];
    let passed=false;
    let msg="";
    let status="FAIL";
    switch(tc.type){
        case "strictEqual":
            passed=tc.actual===tc.expected;
            msg=`${tc.actual}===${tc.expected}`;
            break;
        case "looseEqual":
            passed=tc.actual==tc.expected;  
            msg=`${tc.actual}== ${tc.expected}`;
            break;
        case "typeCheck":
            passed=typeof tc.actual===tc.expected;
            msg=`typeof ${tc.actual} === ${tc.expected}`;
            break;
        case "truthy":
            passed=(tc.actual && tc.expected);
            msg=`Boolean ${tc.actual} is truthy`;
            break;
        case "lessThan":
            passed=tc.actual<tc.expected;
            msg=`${tc.actual} < ${tc.expected}`;
            break;
        default:
            msg="Unknown test type";
    }
    status=passed? "PASS": "FAIL";
    passed? passCount++: failCount++;
    results.push({testCase: tc.name, status, message: msg});
}
console.log("Mini Test Suite Results:");
results.forEach((result, index) => {
    const icon = result.status === "PASS" ? PASS_ICON : FAIL_ICON;
    console.log(`${icon} ${testprefix}-${String(index + 1).padStart(3, "0")} | ${result.testCase} | ${result.status} | ${result.message}`);
});
let passRate=((passCount/totaltest)*100).toFixed(2);
if(passRate>80){
    console.log(`passRate : ${passRate}%  Overall Status: ✅ MAJOR TESTS PASSED - Ready for release`);
}else{
    console.log(`passRate : ${passRate}%  Overall Status: ❌ FAILED`);
}
