
  // user input storage
  function userInputStorage(numberOne, numberTwo, operator) {

  }

  // var test = userInputStorage();
  // console.log(test);




  // create dom events for each button

  // var number = document.getElementsByTagName('button')[1].textContent;
  // console.log(number);

var buttons = document.querySelectorAll('.buttonNum');

// for (var i = 0; i < buttons.length; i++) {
//   button.addEventListener("click", buttonType)
//
//   function buttonType() {
//     console.log(this.innerHTML + " was clicked");
//     return this.innerHTML;
//   }
//   test = buttontype();
//   console.log(test);
// }

for (var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  button.addEventListener("click", buttonType);

  function buttonType() {
    console.log(this.innerHTML + " was clicked");
    var input = this.innerHTML;
    return input;
  }
}


  // have a storage for which numbers are used

  // have a storage for each operator used

  // create functions for what each operator does
