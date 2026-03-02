var globalUserCount=8;
const roles=["admin", "editor", "viewer", "tester", "manager"];
const users=[];
for(let i=1;i<=globalUserCount;i++){
    const user={
        userid: `USR-${String(i).padStart(4, "0")}`,
        name:  `TestUser_${i}`,
        email: `testuser${i}@testingacademy.com`,
        role: roles[(i - 1) % roles.length],
        isActive: i % 3 === 0
    };
    users.push(user);
    console.log(`${user.userid} | ${user.name} | ${user.role} | ${user.isActive ? "INACTIVE" : "ACTIVE"}`);
}