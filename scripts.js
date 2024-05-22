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

//  4. Create a calculator using the constructore (i.e. const calculator = new Calculator etc)

// 5. Add an event listener to number buttons by looping over each button
// If a button is clicked, we want to append the button text to the number on the display
//  We also need to call the updateDisplay() function in order to update the display

//  6. Write the updateDisplay and appendNumber functions
//  updateDisplay must change the currentOutputTextElement.innerText to this.currentOutput
//  appendNumber must set this.currentOutput = to the currentOuput (as a string) + number (as a string)

class Calculator {
  constructor(previousOuputTextElement, currentOuputTextElement) {
    this.previousOuputTextElement = previousOuputTextElement;
    this.currentOuputTextElement = currentOuputTextElement;
    this.clear();
  }

  clear() {
    this.previousOuput = "";
    this.currentOuput = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentOuput = this.currentOuput.toString() + number.toString();
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOuputTextElement.innerText = this.currentOuput;
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOuputTextElement = document.querySelector("[data-previous-output]");
const currentOuputTextElement = document.querySelector("[data-current-output]");

const calculator = new Calculator(previousOuputTextElement, currentOuputTextElement);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log("button clicked");
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
