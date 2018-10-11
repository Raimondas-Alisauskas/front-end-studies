function calculate() {
  var number = document.getElementById('vpd').value;
  if (number % 2) {
    document.getElementById('result').textContent = "Odd";
  } else {
    document.getElementById('result').textContent = "Even"
  }
}

function calculate2() {
  var number = prompt("Enter number");
  if (number % 2 === 0) {
    alert("Number is even")
  }
  else {
    alert("Number is odd")
  }
}

calculate2()
