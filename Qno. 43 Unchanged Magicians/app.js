"use strict";
//Question no.43 Unchanged Magicians
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' The graet';
    }
}
const magicians2 = ["Ahmad", "Bilal", "Hunain"];
// make_great(magicians2);
// show_magicians(magicians2);
function make_great2(magicians) {
    const greatMagnincans = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagnincans.push(magicians[i] + '  The great');
    }
    return greatMagnincans;
}
const magicians3 = ["Ahmad", "Bilal", "Hunain"];
const greatMagnincans2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagnincans2);
