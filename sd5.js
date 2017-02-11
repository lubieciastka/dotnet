//funkcje zadanie 1
//Funkcje, zadanie 1: Stworz funkcje ktora wypisze 3 najwieksze elementy w tablicy
 
var table = [1, 4, 232, 2, 10, 123123, 22];

function findTopThree(arrayToSearch) {
  return arrayToSearch
    .sort(function(a, b) {
      return a - b;
    })
    .slice(-3);
}

console.log(findTopThree(table));
