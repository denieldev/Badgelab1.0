var display = document.getElementById("help_container");

function abrirDiv() {
  var display = document.getElementById("help_container").style.display;
  display == "none";
  document.getElementById("help_container").style.display = 'flex';
  document.getElementById("blur-background").style.display = 'block';
}

function fecharDiv() {
  var display = document.getElementById("help_container").style.display;
  display == "flex";
  document.getElementById("help_container").style.display = 'none';
  document.getElementById("blur-background").style.display = 'none';
}

