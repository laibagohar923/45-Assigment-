//  Question Node. 15 Changing Guest List 

let guest_list : string [] = [`Laiba`, `Iqra`, `Simra`, `Maryam`];
for (let i=0; i<guest_list.length; i++){
    console.log('Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
}
let not_present : string = 'Ahmad';
let new_presnt : string = 'Zubair';
for (let i=0; i<guest_list.length; i++){
    console.log ('Respected sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\nThank you\n')
}
console.log (`Mr. ${not_present} will not coming tomorrow on dinner.`)