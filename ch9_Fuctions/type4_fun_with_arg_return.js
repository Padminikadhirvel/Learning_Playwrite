
function sunOfTwoNumbers(a, b) {
    return a + b;
}

let result = sunOfTwoNumbers(5, 10);
let result2 = sunOfTwoNumbers(3, 7);
console.log(result); // 15
console.log(result2); // 10

console.log("+++++++++++++++++++++");
//function definition
function result_verify(score, threshold){
    return score >= threshold ? "Pass" : "Fail";
}
//function calling
console.log(result_verify(45, 60)); // Fail
console.log(result_verify(75, 70)); // Pass