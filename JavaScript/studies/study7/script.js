let savingsAccount = {
  balance: 1000,
  interestRate: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },

  withdraw: function(amount) {
    let verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
      return savingsAccount.printWithdrawStatement(amount);
    } else {
      return savingsAccount.printNoMoneyStatement();
    }
  },

  printSummary: function() {
    return console.log(`Your balance is currently $${savingsAccount.balance} \n
       and your interest rate is ${savingsAccount.interestRate}%`);
  },

  printWithdrawStatement: function(amount) {
    return console.log(`You withdrawed $ ${amount} \n
       you have $${savingsAccount.balance} in you account`);
  },

  printNoMoneyStatement: () => console.log(`You have no enough money`)

}
console.log('-----------------------------------');

savingsAccount.printSummary();

console.log('-----------------------------------');

savingsAccount.withdraw(1000);


console.log('-----------------------------------');

let facebookProfile = {
  name: `String`,
  numberOfFriends: 10,
  Messeges: [`a`, `b`, `c`],
  postMessage: (newMessage) => {
    facebookProfile.Messeges.push(newMessage);
    console.log(facebookProfile.Messeges);
  },
  deleteMessage: (index) => facebookProfile.Messeges.splice(index, 1),
  addFriend: () => facebookProfile.numberOfFriends++,
  removeFriend: () => facebookProfile.numberOfFriends--,

}
console.log(`numberOfFriends ${facebookProfile.numberOfFriends}`);
console.log(`Messeges ${facebookProfile.Messeges}`);
console.log('-----------------------------------');
facebookProfile.postMessage(`d`);
console.log(`Messeges ${facebookProfile.Messeges}`);
facebookProfile.deleteMessage(0);
console.log(`Messeges ${facebookProfile.Messeges}`);
facebookProfile.addFriend();
console.log(`numberOfFriends ${facebookProfile.numberOfFriends}`);
facebookProfile.removeFriend();
console.log(`numberOfFriends ${facebookProfile.numberOfFriends}`);
console.log(facebookProfile);


console.log('-----------------------------------');

const cars = [{
    type: `BMW`,
    price: `30.000`
  },
  {
    type: `Mercedes`,
    price: `35.000`
  }
]
cars.forEach((car) => console.log(`${car.type} car price $${car.price}`));

console.log('-----------------------------------');


document.getElementsByTagName("li")[2].style.backgroundColor = 'red';
document.getElementsByTagName("a")[0].innerHTML = 'about Google';
document.getElementsByTagName("li")[0].style.fontSize = "40px"
document.querySelector('[atributas]').style.fontSize = "40px"
document.querySelector('.klase').style.fontSize = "20px"
