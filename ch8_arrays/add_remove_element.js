let arr=[1,2,3];
arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);

arr.push(5,6);
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);

//splice
arr.splice(2, 1); // removes 1 element at index 2
console.log(arr);
arr.splice(2, 0, 99); // adds 99 at index 2 without removing any element
console.log(arr);
arr.splice(1, 2, 10, 20); // removes 2 elements at index 1 and adds 10 and 20 at index 1
console.log(arr);
arr.splice(3, 1, 30); // removes 1 element at index 3 and adds 30 at index 3
console.log(arr);