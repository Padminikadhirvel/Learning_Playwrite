//checking array for a value

let result=Array.isArray([1,2,3]);
console.log(result); // true    

let result1=Array.isArray("a");
console.log(result); // false    

let fruits=["banana","apple","grapes","orange"];
console.log(fruits.includes("apple")); // true


//every element in array is greater than 0
let r=[80,90,85].every(num=>num>=70);
console.log(r); // true

//some element in array is greater than 90
let r2=[80,90,85].some(num=>num>=90);
console.log(r2); // true   