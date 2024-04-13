"use strict";
//Question no. 40 Album
function makeAlbum(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1),
    };
    return dictionaries;
}
let Album = makeAlbum("Ahmad", "light");
console.log(Album);
Album = makeAlbum("Bilal", "red wave");
console.log(Album);
Album = makeAlbum("Hunain", "seenbreez");
console.log(Album);
