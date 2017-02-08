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