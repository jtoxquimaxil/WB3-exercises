"use strict";

function displayMailingLabel() {
    console.log(" Jakelin T. " + " 123 Oakwood Ave " + " Brooklyn " + " New York " + " 11235 ");
}

///////////////////////////////////////////


function addNumbers(num1, num2) {
    return num1 + num2;
}
const num1 = 5;
const num2 = 3;

const someNumber = num1 + num2;

console.log("5 + 3 = " + someNumber)

///////////////////////////////////////////////////

function displayReceipt(totalDue, amountPaid) {
    if (amountPaid < totalDue) {
        const changeDue = amountPaid - totalDue;
        console.log("You have to pay a difference of " + changeDue );

    } else if (amountPaid === totalDue)
        console.log("You do not owe anything" + changeDue );
}


const amountPaid = 120;
const totalDue = 143;

function displayMailingLabel(){
    
}

