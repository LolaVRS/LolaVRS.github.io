/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// acordeon
// se va a crear una variable lamada acordeon
const $acordeon = document.querySelectorAll('.sub-titles');
// el for ayuda a iterar por cada uno de los elementos que tiene la clase sub-titles

for (let i = 0; i < $acordeon.length; i++)  {
    $acordeon[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}