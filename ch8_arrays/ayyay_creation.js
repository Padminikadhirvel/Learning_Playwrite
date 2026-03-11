let fruits={};
let fruits_fresh={"0":"apple","1":"banana","2":"grapes"};
console.log(fruits);
console.log(fruits_fresh);


//Array Constructor
let fruits1=new Array();
let fruits_fresh1=new Array("apple","banana","grapes");
console.log(fruits1);
console.log(fruits_fresh1);

let test=Array.of (1,2,3);
console.log(test[0]);

let chars=Array.from("hello");
console.log(chars);
//Access and Modify Array Elements
let numbers=[10,20,30,40,50];
console.log(numbers[0]);
numbers[0]=100;
console.log(numbers[0]);
console.log(numbers.at(0));
console.log(numbers.at(-1));
console.log(numbers.at(-2));
console.log(numbers.at(-4));// undefined

