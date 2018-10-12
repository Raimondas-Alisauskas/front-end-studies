const budget = 12500000000;
const people = 637244;

function calculate(){
  let pensionSize = document.getElementById('vpd').value;
  let monthlyCost = pensionSize * people;
  let yearlyCost = monthlyCost * 12;
  let persentage = yearlyCost * 100 / budget;
  document.getElementById('result').textContent = persentage.toFixed(2) + "%"

}
