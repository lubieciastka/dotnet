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





