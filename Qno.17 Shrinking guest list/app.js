"use strict";
// Question no 17. Shrinking guest list
let guest_list = [`Laiba`, `Iqra`, `Simra`, `Maryam`];
// for (let i=0; i<guest_list.length; i++){
//     console.log('Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
// }
let not_present = 'Ahmad';
let new_guest = 'Zubair';
guest_list[1] = new_guest;
// for (let i=0; i<guest_list.length; i++){
//     console.log ('Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
// }
// console.log (`Mr. ${not_present} will not coming tomorrow on dinner.`)
guest_list.unshift('Shaheen', 'Sarfaraz', 'Abdullah');
// for (let i=0; i<guest_list.length; i++){
//     console.log ('Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow. We found big table so we decided to invite 3 more guest\nThank you\n')
// }
console.log('\nUnfortunately we can arrange big table , only two people allowed');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam. ${remove_guest} you are not invited for dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Recpected Sir/Madam` + guest_list[i] + `,\nYes you are still invited on tomorrow dinner\nThank you\n`);
}
guest_list.splice(0, 2);
console.log(guest_list);
