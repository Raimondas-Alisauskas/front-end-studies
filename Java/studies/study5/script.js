let delivery = true;
let destination = 'Ukmerge';
let priceItem = 40;
let costDelivery = 20;

let productArr = [];

productArr[0] = delivery;
productArr[1] = destination;
productArr[2] = priceItem;
productArr[3] = costDelivery;


console.log(productArr);


console.log('-----------------------------------');

var rainbow = ['red', 'orange', 'blackberry', 'blue'];

rainbow.splice(2, 2, 'yellow', 'green', 'blue', 'purple');

console.log(rainbow);

console.log('-----------------------------------');

let team1 = ['1', '2', '3', '4', '5', '6', '7', '8'];

function hasEnoughPlayers(team) {
  return team.length >= 7;
}
console.log(hasEnoughPlayers(team1));

console.log('-----------------------------------');

let array2 = ['a', 'b', 'c'];
for (var i = 0; i < array2.length; i++) {
  array2[i] = array2[i].toUpperCase();
}
console.log(array2);

console.log('-----------------------------------');
let array3 = ['a', 'b', 'c'];

array3.forEach(function(x) {
  x.toUpperCase();
  console.log(x);
  return x;
});
console.log(array3);


console.log('-----------------------------------');

let test1 = [12, 929, 11, 3, 199]

test1.forEach(function(element) {
  if (element % 3 == 0) {
    element += 100;
  }
  console.log(element);
});
console.log(test1);

console.log('-----------------------------------');


array3.forEach(function(x) {
  console.log(x);
});

array3.map(function(x) {
  return console.log(x);
});

array3.forEach((x) => {
  console.log(x);
});

array3.forEach((x) => console.log(x));

console.log('-----------------------------------');

let newArray = array3.map((x) => x.toUpperCase());

console.log(newArray);

newArray = array3.map((x) => {
  y = x.toUpperCase();
  y += 'm';
  return y
});
console.log(newArray);

console.log('-----------------------------------');

let bills = [50.23, 19.12, 34.01, 100.11]
let billsWithTips = bills.map((x) => Number((x * 1.15).toFixed(2)));
console.log(billsWithTips);

console.log('-----------------------------------');

let numbers = [
  [2, 8, 3],
  [5, 3, 6],
  [14, 12, 15]
];
for (var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers[i].length; j++) {
    if (numbers[i][j]%2 ==0) {
      numbers[i][j] += " even"
    } else{
      numbers[i][j] += " odd"
    }
  }
}
console.log(numbers);






console.log('-----------------------------------');
