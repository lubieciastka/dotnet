// https://jsfiddle.net/
// nofluffjobs.com
// https://github.com/lubieciastka
// https://github.com/lubieciastka/dotnet

var myArray = [];

for(var i = 0; i < 101; i++){
	//ciało funkcji - to co wywoluje sie w petli
  myArray.push(i);
}

console.log(myArray);

var myArray2 = [];

// for with modulo

for(var i = 0; i < 101; i++){
	if(i % 2 === 0){
  	myArray2.push(i);
  }	
}

console.log(myArray2);


//1. definiujemy zmienna z tablica
//2. tworzymy petle for - 10 iteracji
//3. w petli tworzymy zmienna tymczasowa z druga tablica (rzedy)
//4. robi drugiego fora (iterator nazywa inaczej niz w petli wyzej )
//5. w drugiej petli - 10 iteracji
//6. w drugiej petli wrzucamy do tymczasowej tablicy reszte z dzielenia
//7. konczymy druga petle
//8. zmienna tymczasowa (juz wypelniona) wrzucamy do pierwszej tablicy


var myArray = [];

for(var i = 0; i < 10; i++){
	var myArrayTempRow = [];
  
	for(var j = 0; j < 10; j++){
  	myArrayTempRow.push((i + j) % 2);
  }
  
  myArray.push(myArrayTempRow);
}

console.table(myArray);

var array = [1,4,2,10,12,1, 100];
var minValue = array[0];
var maxValue = array[0];

//Do domu: sprawdzenie czy element w tablicy jest liczba (isNaN)

for (var i = 0; i < array.length; i++){
	if (minValue > array[i]){
  	minValue = array[i];
	}
  if (maxValue < array[i]){
  	maxValue = array[i];
  }
}

console.log("minValue: ", minValue, "maxValue: ",maxValue);

// praca domowa - wygenerowac ponizsza tablice samemu 
// hint: zakres do 10 elementow
// hint: Math.random() - pamietajac o tym co zwraca ta metoda <0,1)
// hint: Math.floor() vs Math.ceil()
// hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

var array = [1,4,2,10,12];

for (var i = 0; i < array.length; i++) {
	var temp = "";
  for (var j = 0; j < array[i]; j++){
		temp = temp + "X";
    //temp += "X"
  }
  console.log(temp);
}





