//Transforming arrays
let numbers=[45,82,91,60,73];

let doubled=numbers.map(num=>num*2);
console.log(doubled); // [90,164,182,120,146]

grades=numbers.map(num=>num>60?"pass":"fail");
console.log(grades); // ["fail","pass","pass","pass","pass"]

// reverse of map is reduce

let filtered=numbers.filter(num=>num>3);
console.log(filtered); // [4,5]

let sum=grades.reduce((acc,grade)=>acc+(grade==="pass"?1:0),0);
console.log(sum); // 4

let reduced=numbers.reduce((acc,num)=>acc+num,0);
console.log(reduced); // 15

// flat and flatMap
let nested=[[1,2],[3,4],[5,6]];
let flattened=nested.flat();
console.log(flattened); // [1,2,3,4,5,6]