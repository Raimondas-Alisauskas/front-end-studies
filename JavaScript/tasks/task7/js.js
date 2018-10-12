//tuscias kintamasis kuriame saugosime rezultata
let result = '';

let pushEq = document.querySelector('.eq');
let pushC = document.querySelector('.c');
let pushProduct = document.querySelector('.prod');

//vaizdas kuri rodysime skaiciuotuve ekrane
let output = document.querySelector('.output');

//pasizymime buttons
let buttons = document.querySelectorAll('.btn');

// taking all the buttons
buttons.forEach(function(el) {
  el.addEventListener('click', function() {

    if (el.innerText === `x`) {
      el.innerText = `*`
    }

    addToResult(el.innerText)
    display(result);

    // console.log(el.innerText);
    // console.log(result);

  });
});

// pressing on C
pushC.addEventListener('click', function() {
  result = "";
  display(result);

  // console.log(eval(result));
});

// pressing on equal
pushEq.addEventListener('click', function() {
  display(eval(result));

  // console.log(eval(result));
});

// composing result number
function addToResult(param) {
  result = result + param;
};

//display changes
function display(toDisplay) {

  if (toDisplay === "") {
    toDisplay = "0";
  }
  if (typeof(toDisplay) =='number'){
      output.innerText = toDisplay;
  } else{
    output.innerText = toDisplay.replace("*", "x");
  }


}
//start
display(result);
