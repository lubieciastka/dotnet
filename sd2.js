http://codepen.io/anon/pen/pRLRgB
// Zadanie 0 - znajdz pierwszy paragraf na stronie

var firstP = document.querySelector('p');
// console.log(firstP);
// Zadanie 1 - znajdz wszystkie paragrafy na stronie

var allP = document.querySelectorAll('p');
// console.log(allP);

// Zadanie 2 - znajdz div'a o klasie inner2

var divInner = document.querySelector('div.inner2');
// console.log(divInner);

// Zadanie 3 - znajdz wszystkie paragrafy o klasie inner
var pInner = document.querySelectorAll('p.inner');
console.log(pInner);

// Zadanie 4 - znajdz wszystkie elementy li o klasie error 
var liError = document.querySelectorAll('li.error');
console.log(liError)


// Zadanie 1 - Znajdz wszystkie div'y na stronie - wypisz ich nazwy klas

var allDiv = document.querySelectorAll('div');

for( var i = 0; i < allDiv.length; i++){
  console.log(i, allDiv[i].className);
}

// Zadanie 2 - Znajdz wszystkie element li o klasie 'ok' i zmien im kolor tla na zielony

var liOk = document.querySelectorAll('li.ok');

for( var i = 0; i < liOk.length; i++){
  liOk[i].style.backgroundColor = "green";
}


// Zadanie 3 - pobierz tekst który znajduję sie w paragrafie, zapisz go do zmiennej oraz wyświetl a następnie podmień go na "Hello World"

var myP = document.querySelector('p');

console.log(myP.innerHTML);

myP.innerHTML = "Hello World";



// Zadanie 4 - wypisz zawartość wszystkich elementów li na stronie 

var allLi = document.querySelectorAll('li');

for( var i = 0; i < allLi.length; i++){
  console.log(allLi[i].innerHTML);
}


//koty
var allImg = document.querySelectorAll('img');

for(var i = 0; i < allImg.length; i++){
    allImg[i].setAttribute('src', 'http://www.kotydomowe.com/img/koty/perskie/Perski-Srebrny-Shell-Szynszyla3.jpg');
}

http://codepen.io/anon/pen/ggKxmB

// Zadanie 1
// nadaj co drugiemu elementowi list o id zadanie1 klase error

var allLi = document.querySelectorAll('#zadanie1 li');

for (var i = 0; i < allLi.length; i++) {
  if (i % 2 === 1) {
    allLi[i].classList.add('error');
  }

}
console.log(allLi);




