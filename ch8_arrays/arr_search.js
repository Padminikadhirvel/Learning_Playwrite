//searching
let results=["pass","fail","pass","pass","fail"];
results.indexOf("pass"); // 0
results.indexOf("fail");   // 1
results.indexOf("absent"); // -1
results.lastIndexOf("pass"); // 3
results.includes("pass"); // true
results.includes("absent"); // false    

//FIND- RETURNS THE FIRST ELEMENT THAT SATISFIES THE CONDITION
let numbers=[10,20,30,40,50];
let found=numbers.find(function(num){
    return num>25;
});
console.log(found); // 30

numbers.find(num=>num>25); // 30

//FINDINDEX- RETURNS THE INDEX OF THE FIRST ELEMENT THAT SATISFIES THE CONDITION
let index=numbers.findIndex(num=>num>25);
console.log(index); // 2    

numbers.findLastIndex(num=>num>25); // 4
