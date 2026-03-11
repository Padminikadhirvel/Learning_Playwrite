let arr=[1,2,3];
let copy=arr; // reference copy
copy.push(4);
console.log(arr.length); // 4 - original array is modified
console.log(copy.length); // 4 - copied array is modified