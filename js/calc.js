  // user input storage
  // function userInputStorage(numberOne, numberTwo, operator) {
  // }
  // var test = userInputStorage();
  // console.log(test);
  // create dom events for each button

  // var number = document.getElementsByTagName('button')[1].textContent;
  // console.log(number);

// var buttons = document.querySelectorAll('.buttonNum');
//
// for (var i = 0; i < buttons.length; i++) {
//   var button = buttons[i];
//   button.addEventListener("click", buttonType);
//   buttonType();
// }
//
// function buttonType() {
//   console.log(this.innerHTML + " was clicked");
//   var input = this.innerHTML;
//   return input;
// }
  // have a storage for which numbers are used
  // have a storage for each operator used
  // create functions for what each operator does

// set up listeners for buttons

var numberOne = true;
var numberTwo = false;
var operator = false;

buttonListeners();

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

function enterNumber(numbers) {
  var calcScreen = document.getElementById('screen');
  // loop to set click listeners on each button
  for (var i = 0; i < numbers.length; i ++) {
    numbers[i].addEventListener("click", function(event){
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

function clearScreen(clear) {
  var calcScreen = document.getElementById('screen');
  clear[0].addEventListener("click", function(event){
    calcScreen.innerHTML = "Sparta Calculator";
    numberOne = true;
    numberTwo = false;
    operator = false;
  })
}

function getAnswer(equals){
  var calcScreen = document.getElementById('screen');
  equals[0].addEventListener("click", function(event){
    var answer = doCalculation();
    calcScreen.innerHTML = answer;
  })
}

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
