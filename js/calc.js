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
buttonListeners();

function buttonListeners() {
  var numberButtons = document.getElementsByClassName('buttonNum');
  var operatorButtons = document.getElementsByClassName('operator');
  var clearButton = document.getElementsByClassName('buttonClear');
  var equalsButton = document.getElementsByClassName('equals');

  enterNumber(numberButtons);
  enterOperators(operatorButtons)
}

function enterNumber(numbers) {
  // loop to set click listeners on each button
  for (var i = 0; i < numbers.length; i ++) {
    numbers[i].addEventListener("click", function(event){
      var test = this.innerHTML;
      console.log("button - " + test + " has been clicked");
    })
  }
}

function enterOperators(operators) {
  // loop to set click listeners on each button
  for (var i = 0; i < operators.length; i ++) {
    operators[i].addEventListener("click", function(event){
      var test = this.innerHTML;
      console.log("button - " + test + " has been clicked");
    })
  }
}
