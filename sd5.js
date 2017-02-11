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


// resize:

window.addEventListener('resize', function(event){
	console.log(window.outerHeight, window.outerWidth);
});


// statki - wersja z obrazkami
//<div id="statki"></div>
// table {
//   color: white;
//   border-collapse: collapse;
// }

// td {
//   background: #666;
//   width: 20px;
//   height: 20px;
// }

// td img{
//   max-width:30px;
// }

// .water {
//   background-color: blue;
// }

var statki = document.querySelector('#statki');
var game = [];
var pirateImg = "<img src='https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/pirates_ship.png'/>";

draw(generate(game, 10));

function generate(gameTable, size) {
  for (var i = 0; i < size; i++) {
    var tempRow = [];
    for (var j = 0; j < size; j++) {
      if (Math.random() < 0.2) {
        tempRow.push(1);
      } else {
        tempRow.push(0);
      }
    }
    gameTable.push(tempRow);
  }

  return gameTable;
}

function draw(gameTable) {
  statki.innerHTML = "";

  var table = statki.appendChild(document.createElement('table'));

  for (var i = 0; i < gameTable.length; i++) {
    table.appendChild(drawRow(gameTable[i]));
  }

  function drawRow(row) {
    var tr = document.createElement('tr');

    for (var i = 0; i < row.length; i++) {
      var td = document.createElement('td');
      if (row[i] === 1) {
        td.innerHTML = pirateImg;
      } else {
        td.classList.add('water');
        td.innerHTML = "&nbsp;";
      }
      tr.appendChild(td);
    }

    return tr;
  }
}




