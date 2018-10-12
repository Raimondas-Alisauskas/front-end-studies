let input = document.getElementById('btn');
btn.addEventListener('click', someFunc);

function someFunc(){
  let inputValue = document.querySelector('input').value;
  alert(inputValue)
}

// ------------------------------------


let btn2 = document.getElementById('button2');
btn2.addEventListener('click', function2);

function function2(event){
  let inputName = document.getElementById('name').value;
  let inputSurname = document.getElementById('surname').value;
  let inputTxtArea = document.getElementById('txtarea').value;

  let outputString = `Name: ${inputName}, Surname: ${inputSurname}, message: ${inputTxtArea}`;
  document.getElementById("output2").innerHTML = outputString;

}
// ------------------------------------

let btn3 = document.getElementById('button3');

btn3.onclick = function(){
  let number1 = document.getElementById('number1').value;
  let number2 = document.getElementById('number2').value;
  let output3 = Number(number1) + Number(number2);
  document.getElementById("output3").value = output3;
  // console.log(output3);
};
