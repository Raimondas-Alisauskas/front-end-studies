atmCheck()

function atmCheck() {
  var balance = 0;
  var checkBalance = true;
  var isActive = true;
  if (!checkBalance) {
    console.log("Thank you. Have a nice day")
  } else if (isActive && balance > 0) {
    console.log("Your balance is $" + balance + ".")
  } else if (!isActive) {
    console.log("Your balance is not active.")
  } else if (balance === 0) {
    console.log("Your account is empty")
  } else if (balance < 0) {
    console.log("Your balance is negative")
  }
}

validSizes()

function validSizes() {
  var shirtWidth = 21;
  var shirtLength = 29;
  var shirtSleeve = 8.38;
  var size;
  console.log("shirtWidth =" + shirtWidth + " shirtLength =" + shirtLength + " shirtSleeve =" + shirtSleeve);

  if (shirtWidth < 20 && shirtLength < 28 && shirtSleeve < 8.13) {
    console.log("No such size");
  } else if (shirtWidth < 20 && shirtLength < 29 && shirtSleeve < 8.38) {
    console.log("Size is S");
  } else if (shirtWidth < 22 && shirtLength < 30 && shirtSleeve < 8.63) {
    console.log("Size is M");
  } else {
    console.log("No such size")
  }


}

var a = 0.0;
console.log(a == true)


var eatsPlants = true;
var eatsAnimals = false;

eatsPlants ? (eatsAnimals ? category = "valgo viska" : category = "zoleedziai") : (eatsAnimals ? category = 'mesedziai' : category = 'nieko');

console.log(category)

console.log("----------------------------");

var n = 1;
while (n <= 20) {
  if (!(n % 3) && n % 5 == 0) {
    console.log("Fizzbuzz");
  } else if (!(n % 3)) {
    console.log("Fizz");
  } else if (!(n % 5)) {
    console.log("buzz");
  } else console.log(n);
  n++;
}
console.log("----------------------------");
var s = 60;
while (s >= 0) {
  if (s == 40) {
      console.log("T- 4desimt");
    } else if (s == 10) {
      console.log("T- desimt");
    } else if (s == 5) {
      console.log("T- penk");
    } else {
      console.log(s);
    }
    s--;
  }
console.log("----------------------------");

for (var testing = 10; testing >= 1; testing --) {
  console.log(`sentence with number ${testing} ` + testing);
}
console.log("----------------------------");
let factorial = 5;
let f = 1;
for (var i = 1; i <= factorial; i++) {
  f = f * i;
}
console.log(f);

console.log("----------------------------");

for (var row = 1; row <= 4; row++) {
  for (var seat= 1; seat <= 5; seat++) {
    console.log(`row ${row} - seat ${seat}`);
  }
}
