
//if(outstatusCode>=200 && outstatusCode<300){

function checkStatusCode(statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Success");
    } else if (statusCode >= 400 && statusCode < 500) {
        console.log("Client Error");
    } else if (statusCode >= 500 && statusCode < 600) {
        console.log("Server Error");
    } else {
        console.log("Unknown Status Code");
    }
}

const checkStatusCode_Exp = function(statusCode) {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Success");
    } else if (statusCode >= 400 && statusCode < 500) {
        console.log("Client Error");
    } else if (statusCode >= 500 && statusCode < 600) {
        console.log("Server Error");
    } else {
        console.log("Unknown Status Code");
    }
}

const checkStatusCodearrow = (statusCode) => {
    if (statusCode >= 200 && statusCode <= 300) {
        console.log("Success");
    } else if (statusCode >= 400 && statusCode < 500) {
        console.log("Client Error");
    } else if (statusCode >= 500 && statusCode < 600) {
        console.log("Server Error");
    } else {
        console.log("Unknown Status Code");
    }
}

checkStatusCode(200); // Success
checkStatusCode(500); // Server Error

checkStatusCode_Exp(200); // Success
checkStatusCode_Exp(500); // Server Error  

checkStatusCodearrow(200); // Success
checkStatusCodearrow(500); // Server Error

