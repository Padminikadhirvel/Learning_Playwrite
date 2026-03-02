const isPresent=true, isDisplayed=true, isEnabled=false;
let elementStatus, action;
if(isPresent ===  true && isDisplayed === true && isEnabled === true){
    elementStatus="READY";
}else if(isPresent === true && isDisplayed === true && isEnabled === false){
    elementStatus="DISABLED";
}else if(isPresent === true && isDisplayed === false){
    elementStatus="HIDDEN";
}else if(isPresent === false){
    elementStatus="NOT FOUND";
}

const severity= isPresent === false 
                                ? "CRITICAL" : isDisplayed === false || isEnabled === false 
                                ? "WARNING"  : "OK";
if(elementStatus==="READY"){
    action="Element is visible and enabled. Ready for interaction.";
}else if(elementStatus==="DISABLED"){
    action="Element is visible but disabled. Wait for enable state or check preconditions.";
}else if(elementStatus==="HIDDEN"){
    action="Element is not visible and cannot be interacted with.";
}else if(elementStatus==="NOT FOUND"){
    action="Element is not present";
}   
console.log("Status:", elementStatus);
console.log("Severity:", severity);
console.log("Action:", action); 