let score= 88;

if(score<0 || score>100){
    console.log("Enter valid score");
}else if(score<=100 && score>=90){
    console.log("Grade A");
}else if(score<90 && score>=80){
    console.log("Grade B");
}else if(score<80 && score>=70){
    console.log("Grade C");
}else if(score<70 && score>=60){
    console.log("Grade D");
}else if(score<60 && score>=0){
    console.log("Grade F");
}