let original=[1,2,3];

let copy1=[...original]; //shallow copy
console.log(copy1); // [1,2,3]

let copy2=original.slice(); //shallow copy
console.log(copy2); // [1,2,3]  

let copy3=original.concat(); //shallow copy
console.log(copy3); // [1,2,3]  

let copy4= original.concat(); //shallow copy
console.log(copy4); // [1,2,3]
console.log("+++++++++++++++++++++"); // false - different references
copy1.push(4);
console.log(original); // [1,2,3] - original array is not modified
console.log(copy1); // [1,2,3,4] - copied array is modified

//deep copy
// let nestedOriginal=[1,2,[3,4]];
// let nestedCopy=JSON.parse(JSON.stringify(nestedOriginal));
// console.log(nestedCopy); // [1,2,[3,4]]
// nestedCopy[2].push(5);
// console.log(nestedOriginal); // [1,2,[3,4]] - original array is not modified
// console.log(nestedCopy); // [1,2,[3,4,5]] - copied array is modified