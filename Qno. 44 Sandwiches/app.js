"use strict";
//Question no. 44 Sandwiches
function sandwich(...items) {
    console.log("sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`-${items[i]}`);
    }
}
console.log("Enjoy your sandwich");
sandwich('capsicum', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo souce');
