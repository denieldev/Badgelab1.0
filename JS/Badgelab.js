var display = document.getElementById("help_container");

function Mudarestado() {
  var display = document.getElementById("help_container").style.display;
  if(display == "none")
      document.getElementById("help_container").style.display = 'flex';
  else
      document.getElementById("help_container").style.display = 'none';
}
