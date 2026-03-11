//Iterating over arrays //traversing arrays
let tests=["login","signup","checkout","payment"];
console.log("----");
//for loop
for(let i=0;i<tests.length;i++){
    console.log(tests[i]);
}
console.log("----");
//for...of loop
for(let test of tests){
    console.log(test);
}

console.log("----");

//forEach method
tests.forEach((test,index)=>{
    console.log(`${index}: ${test}`);
});
console.log("----");

//entries method
for(let [index,test] of tests.entries()){
    console.log(`${index}: ${test}`);
}

console.log("----");
let students=["Alice","Bob","Charlie"];
for(let student in students){
    console.log(student, "->", students[student]); // logs the index and the corresponding student
}
