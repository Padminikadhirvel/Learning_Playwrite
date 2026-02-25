let a=5,b=10,c=7;//scalen triangle
// let a=5,b=5,c=5; //equilateral triangle
// let a=5,b=5,c=7;//isosceles triangle
if(a==b && b==c){
    console.log("equilateral triangle");
}else if(a==b || b==c || a==c){
    console.log("isosceles triangle");
}else {
    console.log("scalen triangle");
}