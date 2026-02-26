console.log("------------FOR LOOP--------");
console.log("======1========");
for (let i = 0; i <5; i++) {
    console.log("Hello");
}
console.log("======2========");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("======3========");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) 
        console.log(i);
}
console.log("======4========");
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum of first 10 natural numbers: " + sum);
console.log("======5========");
for (let i = 1; i <= 10; i++) {
    let table_val=5;
    console.log(table_val + " * " + i + " = " + (table_val * i) );
}


console.log("------------WHILE LOOP--------");
console.log("======1========");
let i = 1;
while (i <= 5) {
    console.log("Playwright");
    i++;
}
console.log("======2========");
let j = 1;
while (j <= 10) {
    console.log(j);
    j++;
}
console.log("======3========");
let k = 1;
while (k <= 20) {
    if (k % 2 === 0)
        console.log(k);
    k++;
}
console.log("======4========");
let sum1 = 0;
let m = 1;  
while (m <= 10) {
    sum1 += m;
    m++;
}
console.log("Sum of first 10 natural numbers: " + sum1);    

console.log("======5========");
let n = 1;
while (n <= 10) {
    let table_val=7;
    console.log(table_val + " * " + n + " = " + (table_val * n) );
    n++;
}   
