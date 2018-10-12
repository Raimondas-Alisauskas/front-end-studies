function nameReverse(name) {
  let newName = "";
  for (let i = name.length - 1; i >= 0; i--) {
    newName = newName + name[i];
  }
  return newName;
}

console.log(nameReverse('Vardas'));

console.log('-----------------------------------');

function kartdu(sk) {
  return sk * 2;
}
console.log(kartdu(5));

console.log('-----------------------------------');

function counter(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

counter(5);

console.log('-----------------------------------');

function sveikiname(skaicius) {
  let txt = '';
  for (var i = 0; i < skaicius - 1; i++) {
    txt = txt + 'valio, ';
  }

  return txt + 'valio!';
}

console.log(sveikiname(3));

console.log('-----------------------------------');


function triangle(num) {
  let txt = '';
  for (var y = 0; y < num + 1; y++) {
    for (var x = 0; x < y; x++) {
      txt = txt + '*'
    }
    txt = txt + '\n'
  }
return txt;
}

console.log(triangle(5));

console.log('-----------------------------------');


let sveik = function(skaicius) {
  let txt = '';
  for (var i = 0; i < skaicius - 1; i++) {
    txt = txt + 'valio, ';
  }

  return txt + 'valio!';
}

console.log(sveik(3));

console.log('-----------------------------------');
