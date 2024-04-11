// Question no 31 No Users
// • If the list is empty, print the message We need to find some users!
let users : string [] = ['sana', 'ahmad', 'taha', 'babar', 'admin']
if(users.length === 0){
    console.log("We need to find some users!")
}

// • Remove all of the usernames from your array,
//  and make sure the correct message is printed.
else{
    users = [];
    console.log("All user have been removed" + users.length)
}