//Array slicing
let fruits=["banana","apple","grapes","orange"];
let newFruits=fruits.slice(1,3);
console.log(newFruits); // ["apple","grapes"]

//slicing with negative index
let newFruits2=fruits.slice(-3,-1);
console.log(newFruits2); // ["apple","grapes"]

//slicing with number array
let numbers=[1, 2, 3, 4, 5];
console.log(numbers.slice(1,4)); // [2,3,4]
console.log(numbers.slice(2,4)); // [2,3,4]
console.log(numbers.slice(2,5)); // [2,3,4,5]

console.log(numbers.slice(0)); // [1, 2, 3, 4, 5]


//slicing with negative index
let newNumbers2=numbers.slice(-4,-2);
console.log(newNumbers2); // [2,3]


//concatenating arrays
let arr1=[1,2,3];
let arr2=[4,5,6];
let arr3=arr1.concat(arr2);
console.log(arr3); // [1,2,3,4,5,6]

//spreading arrays
let arr4=[...arr1,...arr2];
console.log(arr4); // [1,2,3,4,5,6]

//joining arrays
let arr5=arr1.join("-");
console.log(arr5); // "1-2-3" //convert array to string with separator  


