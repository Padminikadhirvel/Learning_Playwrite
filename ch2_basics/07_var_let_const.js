//var, let, const
//var - function scope
//let - block scope
//const - block scope and cannot be reassigned

var a=5; //Global scope
function test(){
    var b=10; //Function scope
    console.log(a); //5
    console.log(b); //10
}
test();
function printHello(){
    console.log("Hello");
    var a=15; //Local scope
    console.log(a); 
    if(true){
        var a=20;  
        console.log(a); 
    }
    console.log("var-",a); 
}
printHello(); 
console.log(a);
console.log("------------------let------------------");
//let - block scope
let b=20; //Global scope


//function definition
function printHello1(){
    console.log("Hello 1");
    let b=25; //Local scope
    console.log(b); 
    if(true){
        let b=30;
        console.log(b); 
    }
    console.log("let-",b);
}
printHello1();   
console.log(b);  

//const - block scope and cannot be reassigned
console.log("------------------const------------------");
const c=50;
console.log(c);
//c=60;
