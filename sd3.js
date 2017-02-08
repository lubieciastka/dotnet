document.addEventListener('DOMContentLoaded', function() {
  //tutaj dodaj kod wyszukujacy button
  var button = document.querySelector('button');
  
  button.addEventListener('click', function() {
    var newLi = document.createElement('li');
    var task = document.getElementById('task');
    var list = document.getElementById('list');
    
    newLi.innerHTML = task.value;
    list.appendChild(newLi);

    //tutaj dodac kod obslugujacy buttona dodaj zadanie
    // hint: aby pobrac wartosc inputa skorzystaj z elementInputa.value
  });
});


var array = [1, "garnek", "jajko", 23, 9];

for (var i = 0; i < array.length; i++){
  if (typeof array[i] === "string" && array[i].length >= 2){
    var temp = array[i];

    console.log(temp[temp.length-2] + temp[temp.length-1]);
  }

  if (typeof array[i] === "number"){
    if(array[i] < 10){
      console.log("0" + array[i]);
    }else{
      console.log(array[i]);
    }
  }
}

