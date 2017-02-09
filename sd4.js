
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