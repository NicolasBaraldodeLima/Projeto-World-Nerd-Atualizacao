


function dec2hex(numero) {
  var base = 16;
  var digito = new Array();
  var i = 0;

  while (numero != 0) {
    i++;
    digito[i] = numero % base;
    numero = Math.floor(numero / base);
  }
  value = "";
  while (i >= 1)  {
    switch (digito[i]) {
      case 10: { value += "A"; break }
      case 11: { value += "B"; break }
      case 12: { value += "C"; break }
      case 13: { value += "D"; break }
      case 14: { value += "E"; break }
      case 15: { value += "F"; break }
      default: { value += digito[i]; break }
    }
    i--;
  }
  return value;
}

function GerarSenha() {
  document.forms[0].senha.value = "";
  tamanho = document.forms[0].digitos.value;

  // validar o campo *dígitos*
  if (tamanho < 1 || isNaN(tamanho)) {
    alert("Escolha um valor numérico válido para esse campo");
    document.forms[0].digitos.focus();
    document.forms[0].digitos.select();
    return;
  }

  // ajusta o tamanho (em pixels) do campo de acordo com o número de dígitos
  document.forms[0].senha.style.width = (tamanho * 9) + "px";

  // códigos ASCII decimais
  min = 32;
  max = 126;

  for (i = 1; i <= tamanho; i++) {
    caracter = min + Math.floor((Math.random() * (max - min)));  // 32 a 126
    caracter = "%" + dec2hex(caracter);
    caracter = unescape(caracter);
    document.forms[0].senha.value += caracter;
    document.getElementById("aguarde").innerHTML = "aguarde...";
  }
  document.getElementById("aguarde").innerHTML = "";
}
//-->





var vid = document.getElementById("myVideo");

if (vid) {
  vid.autoplay = true;
  vid.load();
}

function startList() {
  if (document.all && document.getElementById) {
    var navRoot = document.getElementById("menuDropDown");
    for (var i = 0; i < navRoot.childNodes.length; i++) {
      var node = navRoot.childNodes[i];
      if (node.nodeName == "LI") {
        node.onmouseover = function() {
          this.className += " over";
        };
        node.onmouseout = function() {
          this.className = this.className.replace(" over", "");
        };
      }
    }
  }
}

window.onload = startList;

function cookies(functions) {
  var container = document.querySelector(".cookies-container");
  var save = document.querySelector(".cookies-save");

  if (!container || !save) {
    return null;
  }

  var localPref = JSON.parse(window.localStorage.getItem("cookies-pref"));

  if (localPref) {
    activateFunctions(localPref);
  }

  function getFormPref() {
    return [...document.querySelectorAll('[data-function]')]
      .filter(function(el) {
        return el.checked;
      })
      .map(function(el) {
        return el.getAttribute("data-function");
      });
  }

  function activateFunctions(pref) {
    pref.forEach(function(f) {
      functions[f]();
    });
    container.style.display = "none";
    window.localStorage.setItem("cookies-pref", JSON.stringify(pref));
  }

  function handleSave() {
    var pref = getFormPref();
    activateFunctions(pref);
  }

  save.addEventListener("click", handleSave);
}

function marketing() {
  console.log("Função de marketing");
}

function analytics() {
  console.log("Função de analytics");
}

cookies({
  marketing,
  analytics,
});



function escreverTexto(elemento, texto, intervalo) {
  var i = 0;
  var temporizador = setInterval(function() {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
    } else {
      clearInterval(temporizador);
    }
  }, intervalo);
}


var elementoTexto = document.getElementById("texto");
var texto = "WELCOME!";
var intervalo = 50;

escreverTexto(elementoTexto, texto, intervalo);



window.addEventListener("load", function() {
  var loadingMessage = document.getElementById("loading-message");
  setTimeout(function() {
    loadingMessage.style.opacity = 0;
    setTimeout(function() {
      loadingMessage.style.display = "none";
    }, 1000); 
  }, 2000); 
});


var canvas, ctx, rainDrops;

// Inicializa o canvas e chama a função loop
function init() {
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  rainDrops = [];

  for (var i = 0; i < 100; i++) {
    rainDrops.push(new RainDrop());
  }

  setInterval(loop, 30);
}

// Define a classe RainDrop
function RainDrop() {
  this.x = Math.random() * canvas.width;
  this.y = 0;
  this.speed = Math.random() * 2 + 5;
  this.width = Math.random() * 1 + 1;
  this.height = Math.random() * 20 + 10;
}

// Desenha a chuva na tela
function drawRain() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (var i = 0; i < rainDrops.length; i++) {
    ctx.fillStyle = "blue";
    ctx.fillRect(rainDrops[i].x, rainDrops[i].y, rainDrops[i].width, rainDrops[i].height);
    ctx.globalAlpha = rainDrops[i].alpha;
    rainDrops[i].alpha = 1 - (rainDrops[i].y / canvas.height);
  }
}

// Move a chuva para baixo e redefine a posição da gota quando ela atinge o fundo
function moveRain() {
  for (var i = 0; i < rainDrops.length; i++) {
    rainDrops[i].y += rainDrops[i].speed;
    
    if (rainDrops[i].y > canvas.height) {
      rainDrops[i].y = 0;
      rainDrops[i].x = Math.random() * canvas.width;
    }
  }
}

// Loop principal para animar a chuva
function loop() {
  drawRain();
  moveRain();
}

// Inicializa a animação quando a página é carregada
window.onload = function() {
  init();
};


var btn = document.getElementById("myBtn");
var modal = document.getElementById("myModal");

// Obtenha o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abra o modal
btn.onclick = function() {
  modal.style.display = "block";
  var video = document.getElementById("video");
  video.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
}

// Quando o usuário clicar no <span> (x), feche o modal
span.onclick = function() {
  modal.style.display = "none";
  var video = document.getElementById("video");
  video.src = "";
}

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    var video = document.getElementById("video");
    video.src = "";
  }
}

$(document).ready(function() {
  $('#btn-load-data').click(function() {
    $.ajax({
      
     
url: 'https://jsonplaceholder.typicode.com/todos/1',
      method: 'GET',
      success: function(data) {
        console.log(data);
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});










