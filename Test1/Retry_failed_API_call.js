let attempt=0;
let success=false;
const maxAttempts=5;
do{
    attempt++;
    const randomNum=Math.random();
    if(randomNum>0.6){
        success=true;
        console.log(`Attempt ${attempt} : ✅ SUCCESS (Response 200 OK)`);
    }else{
        console.log(`Attempt ${attempt} : ❌ FAILED (Timeout/Error)`);
    }
}while(!success && attempt < maxAttempts);

if(success){
    console.log(`API call PASSED after ${attempt} attempt(s).`);
}else{
    console.log(`API call failed after ${maxAttempts} attempts.`);
}