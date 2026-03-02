var totalLoginAttempts = 0;
const validusername = "admin@testingacademy.com";
const validpassword = "Test@1234";
const maxAttempts = 3;
const loginAttempts = [
        { username: "admin@testingacademy.com", password: "wrong1" },
        { username: "admin@testingacademy.com", password: "wrong2" },
        { username: "admin@testingacademy.com", password: "wrong3" },
        { username: "admin@testingacademy.com", password: "Test@1234" }
    ];
let index=0, failedAttempts=0, accountLocked=false;
do{
    const attempt=loginAttempts[index];
    totalLoginAttempts++;
    if(accountLocked=== true){
         console.log(`Attempt ${totalLoginAttempts}: ACCOUNT LOCKED - Rejected`);
    }else if(attempt.username === validusername && attempt.password === validpassword){
        console.log(`Attempt ${totalLoginAttempts}: ✅ SUCCESSFUL LOGIN`);
        break;
    }else{
        console.log(`Attempt ${totalLoginAttempts}: ❌ FAILED - Strike ${totalLoginAttempts}/${maxAttempts}`);
        failedAttempts++;
        if(failedAttempts >= maxAttempts){
            accountLocked = true;
            console.log("🚨 ACCOUNT LOCKED");
        }
    }
    index++;
}while(index < loginAttempts.length);


// login()
// function login(user, pass) {
//     totalLoginAttempts++;   
//     if (user === username && pass === correctPassword) {
//         console.log("Login successful!");
//     } else {
//         console.log("Login failed!"); 
//         if (totalLoginAttempts >= maxAttempts) {
//             console.log("Alert: Possible brute-force attack detected!");
//         }   
//     }
// }   
// do