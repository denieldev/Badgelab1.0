var display = document.getElementById("help_container");

function abrirDiv() {
  var display = document.getElementById("help_container").style.display;
 display == "none";
      document.getElementById("help_container").style.display = 'flex';
}
function fecharDiv() {
    var display = document.getElementById("help_container").style.display;
    display == "flex";
        document.getElementById("help_container").style.display = 'none';
  }

