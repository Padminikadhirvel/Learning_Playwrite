function buildUsers(names, roles) {
    const users = [];

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const role = roles[i];

        const username = name.toLowerCase().replace(/\s+/g, "_");
        const email = `${username}@playwrightbatch.com`;

        users.push({
            username,
            email,
            role
        });
    }

    return users;
}
const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

const users = buildUsers(names, roles);

console.log(users);