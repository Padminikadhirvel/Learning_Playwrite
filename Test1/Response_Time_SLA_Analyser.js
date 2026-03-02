let responseTimes=[120, 230, 450, 510, 180, 620];
const SLA_LIMIT=500;
console.log(`Total Request : ${responseTimes.length}`);
let withinSLA=0;
//min response time
let minTime, maxTime, slabreach=0;
for(let i=0;i<responseTimes.length;i++){
    if(i===0){
        minTime=responseTimes[i];
        maxTime=responseTimes[i];
    } else {
        if(responseTimes[i]<minTime){
            minTime=responseTimes[i];
        }
        if(responseTimes[i]>maxTime){
            maxTime=responseTimes[i];
        }
    }
    if(responseTimes[i]>=SLA_LIMIT){
        slabreach++;
    }
}

console.log(`Min Response Time: ${minTime}ms`);
console.log(`Max Response Time: ${maxTime}ms`);
console.log(`SLA Breaches: ${slabreach} (${((slabreach/responseTimes.length)*100).toFixed(2)}%)`);
if(slabreach===0){
    console.log("Overall Status: ✅ SLA COMPLIANT");
}else{
    console.log("Overall Status: ❌ SLA VIOLATED");
}

