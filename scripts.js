// 1. Select all the different button types by giving data attributes to each type in index.html, and declaring them as variables
// e.g. All number buttons get data-numbers
// e.g. All operation buttons get data-operation

// 2. Create a class called Calculator at the top of the document.
// This class will take a constructor which takes in all the inputs and functions for the calc
// Set values for previous and current output in the constructure
// Decalre all the necessary functions in the constructor
//  e.g. Clear, delete, equals, adding a number to the output screen, clicking an operation, computing an calc and updating the display

// 3. The calc will need to be cleared as an initial state
// call clear() inside the Calculator class.

class Calculator {
  constructor(previousOuput, currentOuput) {
    this.previousOuput = previousOuput;
    this.currentOuput = currentOuput;
    this.clear();
  }

  clear() {
    this.previousOuput = "";
    this.currentOuput = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOuput = document.querySelector("[data-previous-output]");
const currentOuput = document.querySelector("[data-current-output]");
