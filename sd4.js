// event loop - zobaczyc na MDN
// wyszukiwanie liniowe
var table = [1, 23,'sdsd', 23, 989, 'abc'];
var toFind = 23;
var position = -1;

for (var i = 0; i < table.length; i++){
	if(table[i] === toFind){
  	position = i + 1;
    break;
  }
}

console.log(position);

// Silnia w JS
var silnia = 5;
var wynik = 1;

for(var i = 1; i <= silnia; i++){
	wynik *= i;
}

console.log(wynik);

// randomowe stringi
var availableChars = "abcdefghijklmnopqrstuwxyz123456789";
var length = 9;
var result = "";
var charCounter = 0;

for (var i = 0; i < length; i++) {
  var temp = availableChars[Math.floor(Math.random() * availableChars.length)];

  if (isNaN(temp)) {
    if (charCounter % 2 === 0) {
      temp = temp.toUpperCase();
    }
    charCounter++;
  }

  result += temp;
}

console.log(result);

// do domu - mechanizm coerction
var table = [1, 2, 3, 4, 5, 6, '8as'];
var counter = 0;

for (var i = 0; i < table.length; i++) {
  if (isNaN(table[i]) === false && table[i] % 2 === 0) {
    counter++;
  }
}

if (counter === table.length) {
  console.log('wszystkie sa parzyste');
} else {
  console.log('parzystych jest ' + counter + ' liczb z ' + table.length + ' elementow');
}

// dodatkowe
var table = [[], {a:'b'}, '', false, true, 1!==0];
var counter = 0;

for (var i = 0; i < table.length; i++) {
  console.log(table[i], table[i] % 2, table[i] % 2 === 0);
  if (isNaN(table[i]) === false && table[i] % 2 === 0) {
    counter++;
  }
}

if (counter === table.length) {
  console.log('wszystkie sa parzyste');
} else {
  console.log('parzystych jest ' + counter + ' liczb z ' + table.length + ' elementow');
}


// papier/ kamien/ nozyce wersja basic

var user1 = prompt('papier/ kamien/ nozyce');
var user2 = prompt('papier/ kamien/ nozyce');

if (user1 === user2){
	console.log("remis");
  return;
}

if ((user1 === "papier" && user2 ==="kamien") 
 || (user1 === "kamien" && user2 ==="nozyce")
 || (user1 === "nozyce" && user2 ==="papier")){
 console.log("user1 wygral");
 return;
 }
 
 console.log("user2 wygral");







