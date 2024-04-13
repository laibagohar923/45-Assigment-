"use strict";
//  Question no 38 Cities
function describe_City(city, country = 'pakistan') {
    console.log(`${city} is  in ${country}`);
}
describe_City('karachi'); //default browser
describe_City('france', `europe`);
describe_City('lahore', `is in punjab`);
