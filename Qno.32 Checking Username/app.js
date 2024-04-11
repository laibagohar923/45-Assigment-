"use strict";
let current_users = ["saba", "admin", "ahmad", "laiba", "nehal"];
let new_users = ["fawad", "hussain", "users7", "admin", "users9"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available`);
    }
});
