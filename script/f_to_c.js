"use script";

function convertFtoC(currentTemp) {
    let celsiusTemp = (currentTemp - 32) * 5 / 9;
    return celsiusTemp;
}

let currentTemp = 90;
let celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + " degrees fahrenheit in celsius is equal to " + celsiusTemp);

currentTemp = 212;
celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + " degrees fahrenheit in celsius is equal to " + celsiusTemp);

currentTemp = 72;
celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + " degrees fahrenheit in celsius is equal to " + celsiusTemp);

currentTemp = 32;
celsiusTemp = convertFtoC(currentTemp);
console.log(currentTemp + " degrees fahrenheit in celsius is equal to " + celsiusTemp)



