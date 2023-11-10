"use strict";




//my birthdate using the form MM/DD/YYYY

let date1 = new Date("01/30/1998")

console.log(date1.toLocaleDateString());

//Moms birthday using MMM DD YYYY

let date2 = new Date("July, 25, 1969");

console.log(date2.toLocaleDateString());

//Dads birthday using new Date (yyy, m, d)

let date3 = new Date("1976, 04, 25")

console.log(date3.toLocaleDateString());

