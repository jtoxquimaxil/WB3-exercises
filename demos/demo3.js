"use strict";

function displayMailingLabel(name, address, city, state, zip) {
    let line1 = name;
    let line2 = address;
    let line3 = '${city}, ${state}, ${zip}';

    console.log(line1);
    console.log(line2);
    console.log(line3);

}

function addNumber(num1, num2) {
    let result = num1 + num2;
    let message = '${num1} + ${num2} = ${result}'
    console.log(message);

}

function.displayReceipt(totalDue, amountPaid){
    console.log("Total Due: " + totalDue);
    console.log("Amount paid: " + amountPaid);
    let ChangeDue = amountPaid - totalDue;
    changeDue = changeDue.toFixed(2);
    console.log("Change due: " + changeDue);

}

displayMailingLabel("Jakelin", "123 OceanParkway", "Brooklyn", "NY", "11234")
displayMailingLabel()

addNumber(1,2);
addNumber( 100, 505);

displayReceipt(195, 99, 200);