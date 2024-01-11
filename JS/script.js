// const printBtn = document.getElementById('print_btn');
function printBtnActive(){
  logicTest = confirm("Você deseja imprimir seu trabalho?");
  if (logicTest == true){
      print();            
  } else {
      alert('Ok tudo bem, até mais!')
  }
}
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY >0)
})
function previewFile() {
  const preview = document.querySelector('#employeer_photo');
  const file = document.querySelector('#chose_photo').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
// carregar o arquivo de imagem
function logoFile() {
  const preview = document.querySelector('#brand_logo');
  const file = document.querySelector('#chose_logo').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

function bgFile() {
  const preview = document.querySelector('#background_photo');
  const file = document.querySelector('#chose_bg').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

function changeBackgroundImage() {
  var cardLayout = document.querySelector("#card_layout");
  var fileExplorer = document.createElement("input");
  fileExplorer.type = "file";
  fileExplorer.accept = "image/*";
  fileExplorer.onchange = function() {
      var file = fileExplorer.files[0];
      var reader = new FileReader();
      reader.onload = function(e) {
          cardLayout.style.backgroundImage = "url('" + e.target.result + "')";
      };
      reader.readAsDataURL(file);
  };
  fileExplorer.click();
}

// alterar cor da fonte da frente do crachá

const employeer = document.querySelector("#employeer");
const occupation = document.querySelector("#ocupation");
const bg_colorfont = document.querySelector("#bg_colorfont");

function changeColor() {
  employeer.style.color = bg_colorfont.value;
  occupation.style.color = bg_colorfont.value;
}

bg_colorfont.addEventListener("input", changeColor);


// Barcode Generator
function codeBarGen() {
let codebar = document.querySelector("#codebar-input-number");
codebar = codebar.value;

JsBarcode("#code128", codebar, {
  fontSize: 0,
  lineColor: "black",
});
}
JsBarcode();

// mudar a cor do Card, vai pegar a cor do seletor e aplicar no elemento indicado

function trocaCor(){
  var cor = document.getElementById("bg_color").value;
  document.getElementById("card_layout").style.backgroundColor = cor;
  var cardLayout = document.querySelector("#card_layout");
  cardLayout.style.backgroundImage = "none";
}

// mudar imagem de fundo por uma da sua biblioteca

