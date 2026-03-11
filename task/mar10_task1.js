//Exercise-1

let responses = [200, 201, 404, 500, 404, 200, 503];

// Check if ALL responses are successful (200–299)

let allSuccessful = responses.every(code => code >= 200 && code < 300);
console.log(allSuccessful); 

// Find the FIRST non-success code
let firstNonSuccess = responses.find(code => code < 200 || code >= 300);
console.log(firstNonSuccess); 


// Return all unique error codes
let uniqueErrorCodes = [...new Set(responses.filter(code => code < 200 || code >= 300))];
console.log(uniqueErrorCodes); 

//Exercise-2

let responseTimes = [320, 85, 1200, 450, 99];
let sorted = responseTimes.sort(); // Sorts as strings, not numbers - this is a bug here.
console.log("Fastest:", sorted[0]);

//Exercise-3
let suite1 = [{ name: "login", status: "pass" }];
let suite2 = [...suite1];
suite2[0].status = "fail";
console.log(suite1[0].status); // "fail" - because it's a shallow copy, not a deep copy