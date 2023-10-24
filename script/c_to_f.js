"use script";

function convertCtoF(currentTemp) {
    let fahrenheitTemp = (currentTemp * 9/5) + 32;
    return fahrenheitTemp;
}

let currentTemp = 100;
let fahrenheitTemp = convertCtoF(currentTemp);


console.log(currentTemp + " degrees celsius in Fahrenheit is equal to " + fahrenheitTemp);

// let currentTemp = 45
// let currentTemp = 19
// let currentTemp = 0 
// let currentTemp = -7 
// let currentTemp = -40