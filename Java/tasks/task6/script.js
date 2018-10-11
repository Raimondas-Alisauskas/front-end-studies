let countries = [
  ["Portugalija", 10260000, 92212],
  ['Blabla', 10000, 20000]
];

for (var i = 0; i < countries.length; i++) {

  let mlnPeoples = countries[i][1]/1000000;
  let peoplesPerM2 = (countries[i][2]/countries[i][1]*1000000).toFixed(2);

  console.log(`Šalis: ${countries[i][0]}, joje gyvena ${mlnPeoples}
    mln. gyventojų.\p Valstybės plotas: ${countries[i][2]} km², plotas tenkantis
    vienam gyventojui: ${peoplesPerM2} m².`);
}

console.log('-----------------------------------');

countries.map(country => {

  let mlnPeoples = country[1]/1000000;
  let peoplesPerM2 = (country[2]/country[1]*1000000).toFixed(2);

  console.log(`Šalis: ${country[0]}, joje gyvena ${mlnPeoples}
    mln. gyventojų.\p Valstybės plotas: ${country[2]} km², plotas tenkantis
    vienam gyventojui: ${peoplesPerM2} m².`);
});
