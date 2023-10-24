"use script";

function convertCtoF(currentTemp) {
    let fahrenheitTemp = (currentTemp * 9/5) + 32;
    return fahrenheitTemp;
}

let currentTemp = 100;
let fahrenheitTemp = convertCtoF(currentTemp);
console.log(currentTemp + " degrees celsius in Fahrenheit is equal to " + fahrenheitTemp);

currentTemp = 45;
fahrenheitTemp = convertCtoF(currentTemp);
console.log(currentTemp + " degrees celsius in Fahrenheit is equal to " + fahrenheitTemp);

currentTemp = 19;
fahrenheitTemp = convertCtoF(currentTemp);
console.log(currentTemp + " degrees celsius in Fahrenheit is equal to " + fahrenheitTemp);

currentTemp = 0 
fahrenheitTemp = convertCtoF(currentTemp);
console.log(currentTemp + " degrees celsius in Fahrenheit is equal to " + fahrenheitTemp);

currentTemp = -7 
fahrenheitTemp = convertCtoF(currentTemp);
console.log(currentTemp + " degrees celsius in Fahrenheit is equal to " + fahrenheitTemp);

currentTemp = -40
fahrenheitTemp = convertCtoF(currentTemp);
console.log(currentTemp + " degrees celsius in Fahrenheit is equal to " + fahrenheitTemp);