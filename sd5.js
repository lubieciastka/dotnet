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
// funkcje zadanie2
// Stworz skrypt do zbudowania tablicy do gry statki w wersji HTML,
// https://jsfiddle.net/8tqjqa7f/3/
// <div id="statki"></div>

var statki = document.querySelector('#statki');

draw(10);

function draw(size) {
  statki.innerHTML = "";

  var table = statki.appendChild(document.createElement('table'));

  for (var i = 0; i < size; i++) {
    table.appendChild(drawRow(size));
  }
}

function drawRow(size) {
  var tr = document.createElement('tr');

  for (var i = 0; i < size; i++) {
    var td = document.createElement('td');
    td.innerHTML = "X";
    tr.appendChild(td);
  }

  return tr;
}

//podmiana obrazkow
var images = [	'https://ih0.redbubble.net/image.161317883.9034/flat,1000x1000,075,f.u1.jpg',
  'https://yt3.ggpht.com/-V92UP8yaNyQ/AAAAAAAAAAI/AAAAAAAAAAA/zOYDMx8Qk3c/s900-c-k-no-mo-rj-c0xffffff/photo.jpg'
];

var image = document.querySelector('img');

image.addEventListener('click', function(){
	image.setAttribute('src', images[Math.floor(Math.random() * images.length)]);
});

