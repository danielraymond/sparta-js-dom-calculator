// global calculator number variables
var numberOne = true;
var numberTwo = false;
var operator = false;

buttonListeners();

// function to call other functions to set listeners on numbers
function buttonListeners() {
  var numberButtons = document.getElementsByClassName('buttonNum');
  var operatorButtons = document.getElementsByClassName('operator');
  var clearButton = document.getElementsByClassName('buttonClear');
  var equalsButton = document.getElementsByClassName('equals');

  enterNumber(numberButtons);
  enterOperators(operatorButtons);
  clearScreen(clearButton);
  getAnswer(equalsButton);
}

// function to set values of numbers and output to screen
function enterNumber(numbers) {
  var calcScreen = document.getElementById('screen');
  // loop to set click listeners on each button
  for (var i = 0; i < numbers.length; i ++) {
    numbers[i].addEventListener("click", function(event){
      // if statement to set number values only once
      if (numberOne === true) {
        numberOne = parseInt(this.innerHTML);
        calcScreen.innerHTML = this.innerHTML;
        operator = true;
      } else if (numberTwo === true) {
        numberTwo = parseInt(this.innerHTML);
        calcScreen.innerHTML = this.innerHTML;
      }
    })
  }
}

// function to set operator
function enterOperators(operators) {
  var calcScreen = document.getElementById('screen');
  // loop to set click listeners on each button
  for (var i = 0; i < operators.length; i ++) {
    operators[i].addEventListener("click", function(event){
      if (operator === true) {
        operator = this.innerHTML;
        numberTwo = true;
        calcScreen.innerHTML = this.innerHTML;
      }
    })
  }
}

// function to clear calculator
function clearScreen(clear) {
  var calcScreen = document.getElementById('screen');
  clear[0].addEventListener("click", function(event){
    calcScreen.innerHTML = "Sparta Calculator";
    numberOne = true;
    numberTwo = false;
    operator = false;
  })
}

// function to calculate answer
function getAnswer(equals){
  var calcScreen = document.getElementById('screen');
  equals[0].addEventListener("click", function(event){
    var answer = doCalculation();
    calcScreen.innerHTML = answer;
  })
}

// function to check which operator has been entered and do the calculation
function doCalculation() {
  switch (operator) {
    case "+":
      return (numberOne + numberTwo).toFixed(2);
      break;
    case "-":
      return (numberOne - numberTwo).toFixed(2);
      break;
    case "*":
      return (numberOne * numberTwo).toFixed(2);
      break;
    case "/":
      return (numberOne / numberTwo).toFixed(2);
      break;
    default:
      return "Err";
  }
}
