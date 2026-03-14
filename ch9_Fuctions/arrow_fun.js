
//arrow function


const greet = (name) => `Hello, ${name}!`;
console.log(greet("Alice"));
console.log("+++++++++++++++++++++");

//arrow function with single parameter - parentheses can be omitted
const double = (x) => x * 2;
console.log(double(5)); // 10

console.log("+++++++++++++++++++++");
//No params-parent require
const getEnv=()=> "staging";
console.log(getEnv()); // staging

console.log("+++++++++++++++++++++");
//Multiple parameters - parentheses are required

const add = (a, b) => a + b;
const result = add(5, 3);
console.log(result); // 8