"use strict";

function submitDate() {
    const dateInput = document.getElementById("dateInput");
    const messageParagraph = document.getElementById("message");
    
    const selectedDate = dateInput.value;
    
    if (selectedDate) {
      messageParagraph.textContent = "You selected the date: " + selectedDate;
    } else {
      messageParagraph.textContent = "Please select a date.";
    }
  }
  