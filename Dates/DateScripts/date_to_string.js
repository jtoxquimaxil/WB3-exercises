"use strict";

let d = new Date();

//toString() method will show date/time in text string and time zone
console.log(d.toString());

//will show date/time in a text string
console.log(d.toUTCString());

//toDateString() returns only the date string
console.log(d.toDateString());

//will take a date object and convert it to a string according to current 
//locale setting on setting on user machine
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString()); // three functions
