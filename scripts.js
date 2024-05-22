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

// 7. We do not want users to be able to add more than one period.
// Add an if statement to appendnumber() to prevent this.

//  8. Create an event listener for the operation buttons (copy and paste the number event listener and updated)
// When someone clicks an operation button, we want to call chooseOperation() with the inner text of the button passed in as an argument
// Then, update the display

// 9. Write logic for chooseOperation()
// Two things are heppening when you click an operation button: (i) The currentOuput goes into the previousOuput, and (ii) the operationButton text goes into the previousOuput
// this.operation = opeation lets the calculator know which operation to use when it computes the value
// set the prevoiusOuput = curentOutput to move the current output into the previous
// then we need to clear out the currentOutput by setting it = to ''
// be sure to update updateDisplay to update the prevoiusOutout
// add a check into chooseOperation() to check that the currentOutput is blank, it does not clear the screen when you click a different op
// add another check to see if the previousOutput is empty. If not, we need to run the compute() before running the chooseOperation()

// 10. Write the logic for compute()
// Add an event listener to the equals button. When clicked, comput() and updateDisplay() should run
// create variable to be the result of the compute fucntion, which is initially nothing
// Create a number variable for the current and previous outputs
// Create a check for whether current/previousOutputs are NaN
// Use a switch statement to create a bunch of if statements conrresponding this.operation
// Outside of the switch statement, set currentOuput = result of compute (computation), clear previous output and set operation to undefined

// 11. Create an event listener for the AC button
// The AC button click should call clear()

// 12. Write the ogic for the delete() function
// Use slice to chop the last value of the string version of currentOutput off

// The calc now works but does not look perfect

// 13. We want to update the updateDisplay() to ensure that the operation is displayed next to the previousOutput
// Use an if statement to check is this.operation is not null. If so, concatenate the this.previousOutput and this.operation using a string temporate literal

// 14. Create and use a helper function (getDisplayNumber) to generate and return  a display number this is correctly delimited with commas
// Pass getDisplayNumber() into the updateDisplay() function with this.currentOuput / this.previousOutput as it's argument

// 15. Update getDisplayNumber to correctly display commas corectly
//  We essentially need to split the currentOutput into integers before the period, and integers after the period.
// define a variable that is = to the sting version of the variable
// define a variable which is = to the numbers before the period
// Defind a variable which is = to the numbers after the period
//  define a variable which is the didsplay version of both of the above variables
//  Add some if statements to return the correct format display number

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

  delete() {
    this.currentOuput = this.currentOuput.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === "." && this.currentOuput.includes(".")) return;
    this.currentOuput = this.currentOuput.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOuput === "") return;
    if (this.previousOuput !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOuput = this.currentOuput;
    this.currentOuput = "";
  }

  compute() {
    let computation;
    const previous = parseFloat(this.previousOuput);
    const current = parseFloat(this.currentOuput);

    if (isNaN(previous) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = previous + current;
        break;
      case "-":
        computation = previous - current;
        break;
      case "*":
        computation = previous * current;
        break;
      case "÷":
        computation = previous / current;
        break;
      default:
        return;
    }
    this.currentOuput = computation;
    this.operation = undefined;
    this.previousOuput = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    this.currentOuputTextElement.innerText = this.getDisplayNumber(this.currentOuput);
    if (this.operation != null) {
      this.previousOuputTextElement.innerText = `${this.getDisplayNumber(this.previousOuput)} ${this.operation}`;
    } else {
      this.previousOuputTextElement.innerText = "";
    }
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

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // console.log("button clicked");
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalButton.addEventListener("click", (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
