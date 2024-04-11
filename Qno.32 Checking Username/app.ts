//Question no.32 Cheaking username

let current_users: string[] =["saba", "admin", "ahmad","laiba", "nehal"];
let new_users: string [] =["fawad", "hussain", "users7", "admin", "users9"];


new_users.forEach((newUser) => {
if (
    current_users.some(
        (currentUser) => currentUser.toLowerCase() ===newUser.toLowerCase()
    )

) {
    console.log(`${newUser} will need to enter a new username.`);
} else {
    console.log(`${newUser} is available` );
}

})