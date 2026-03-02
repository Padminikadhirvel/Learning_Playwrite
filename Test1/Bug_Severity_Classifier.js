const frequency = "always";   // always | often | rarely
const impact = "blocker";    // blocker | major | minor

let severity;
if(frequency === "always" && impact === "blocker"){
    severity = "P0 - Critical: Stop release immediately";
} else if(frequency === "always" && impact === "major"){
    severity = "P1– High; Fix before release if possible";
} else if(frequency === "always" && impact === "minor"){
    severity = "P2 - Medium; Address in next release";
} else if(frequency === "often" && impact === "blocker"){
    severity = "P1 - High; Fix before release if possible";
} else if(frequency === "often" && impact === "major"){
    severity = "P2 - Medium; Address in next release";
} else if(frequency === "often" && impact === "minor"){
    severity = "P3 - Low; Address in future release";
} else if(frequency === "rarely" && impact === "blocker"){
    severity = "P2 - Medium; Address in next release";
} else if(frequency === "rarely" && impact === "major"){
    severity = "P3 - Low; Address in future release";
} else if(frequency === "rarely" && impact === "minor"){
    severity = "P4  - Trivial; Fix if time permits";
} 
console.log("Bug Frequency:", frequency);
console.log("Bug Impact:", impact);
console.log(`Bug Severity: ${severity}`);