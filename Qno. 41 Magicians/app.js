"use strict";
//Question no. 41 Magicians
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Ahmad", "Bilal", "Hunain"];
show_magicians(magician);
