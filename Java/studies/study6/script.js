let doors = {
  isOpen: false,
  open: () =>{
    if (doors.isOpen === true){
      console.log(`Doors are open`);

    } else {
      doors.isOpen = true;
          console.log(`I just opened the doors`);
    }

  }

//   ,
//   close: () =>{
//     if (doors.isOpen){
//       console.log(`Doors are open`);
//
//     } else {
//       doors.isOpen = true;
//           console.log(`I just opened the doors`);
//     }
//   }
//
//
//
}
console.log('-----------------------------------');

let lietuva = {
capital: `Vilnius`,
population: 2800000,
nationalDishes: [`cepelinai`, `varskeciai`]

}

console.log(lietuva.capital);
console.log(lietuva.nationalDishes[0]);
console.log(lietuva[`population`]);

console.log('-----------------------------------');

let breackfast = {
  number: `Lumberjack`,
  price: 9.95,
  composition: [`eggs`,`bread`]
  
}
