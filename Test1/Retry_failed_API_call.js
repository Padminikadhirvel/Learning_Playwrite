let attempt=0;
let success=false;
const maxAttempts=5;
do{
    attempt++;
    const randomNum=Math.random();
    console.log(`Attempt ${attempt}: Random number generated: ${randomNum}`);
    if(randomNum>0.6){
        success=true;
        console.log("API call success.");
    }else{
        console.log("API call failed. Retrying...");
    }
}while(!success && attempt < maxAttempts);

if(success){
    console.log("API call succeeded after " + attempt + " attempts.");
}else{
    console.log("API call failed after " + maxAttempts + " attempts.");
}