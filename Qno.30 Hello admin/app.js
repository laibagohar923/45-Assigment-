"use strict";
// Question no.30 Hello admin
let users = ['sana', 'babar', 'admin', 'laiba', 'ahmad'];
for (let user of users) {
    if (user === "admin") {
        console.log(" Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${users}, thank you for logging in again`);
    }
}
