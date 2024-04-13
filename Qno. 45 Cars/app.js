"use strict";
//Question no 45 Cars
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("toyota", "corolla", { color: "sliver", year: "2024" });
console.log(mycar);
