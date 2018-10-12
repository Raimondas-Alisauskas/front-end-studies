groupType()

function groupType() {
  var number = prompt("Enter how many musicians are in the group");
  if (number <= 0) {
    alert("Not  a group")
  }
  else if (number == 1){
    alert("Solo")
  }
  else if (number == 2){
    alert("Duet")
  }
  else if (number == 3){
    alert("Trio")
  }
  else if (number == 4){
    alert("Quarter")
  }
  else alert("this is alarge group")
}
