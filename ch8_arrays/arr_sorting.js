//sorting
let fruits=["banana","apple","grapes"];
fruits.sort();
console.log(fruits); // ["apple","banana","grapes"] 

let numbers=[10,1,21,2];
numbers.sort();
console.log(numbers); // [1,2,10,21]

//sorting in ascending order
numbers.sort((a,b)=>a-b);
console.log(numbers); // [1,2,10,21]
//sorting in descending order
numbers.sort((a,b)=>b-a);
console.log(numbers); // [21,10,2,1]
