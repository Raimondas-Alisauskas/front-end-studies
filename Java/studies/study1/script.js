console.log("Isorinis failas");
console.log(3 + 4.2);
console.log("3"+"4.2");

var celcius = 12;
var farenheit;
farenheit = celcius * 1.8 + 32;
console.log(farenheit);

var pirmas = "Pirmo sakinio pradžia ";
var antras = "Antro sakinio pradžia ";
var trecias = "Trečio sakinio pradžia ";
var pastraipa = pirmas + "\n" + antras + "\n" + trecias;
console.log(pastraipa);

var sign;
console.log(sign);

var bill = 10.25+3.99+7.15;
var tip = bill *0.15;
var total = (bill + tip).toFixed(2);
console.log("$" + total);


var firstName = "John";
var interest = "front end";
var hobby = "racing";
var aversomeMessage = "Hi, my name is" + firstName + ".\n" + "I love " + interest
+ ".\nIn my spare time I like " + hobby + ".";
console.log(aversomeMessage);

// alert("Perspejimas");
// prompt("Katu")


var first = prompt("Enter first number");
var second = prompt("Enter second number");
var sum = (Number(first) + Number(second))
alert("Sum is " + sum);
