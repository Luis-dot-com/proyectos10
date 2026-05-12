// Extender/esconder sidebar
const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const main = document.getElementById('main')

menu.addEventListener('click', () => {
  sidebar.classList.toggle('menu-toggle')
})
main.addEventListener('click', () => {
  sidebar.classList.remove('menu-toggle')
})

const botonRespeto = document.getElementById('boton-respeto')
const respeto = new Audio();
respeto.src = "others/respeto.ogg";
botonRespeto.addEventListener('click', () => {
  respeto.play()
})

// Botones para navegar por las secciones (y el main)
// Botones dentro del Sidebar
const botonNavProyecto0 = document.querySelector('.boton-proyecto-0');
const botonNavProyecto1 = document.querySelector('.boton-proyecto-1');
const botonNavProyecto2 = document.querySelector('.boton-proyecto-2');
const botonNavProyecto3 = document.querySelector('.boton-proyecto-3');
const botonNavProyecto4 = document.querySelector('.boton-proyecto-4');
const botonNavProyecto5 = document.querySelector('.boton-proyecto-5');
const botonNavProyecto6 = document.querySelector('.boton-proyecto-6');
const botonNavProyecto7 = document.querySelector('.boton-proyecto-7');
const botonNavProyecto8 = document.querySelector('.boton-proyecto-8');
const botonNavProyecto9 = document.querySelector('.boton-proyecto-9');
const botonNavProyecto10 = document.querySelector('.boton-proyecto-10');
// Botones dentro de la sidebar y landing page
const botonesProyecto1 = document.querySelectorAll('.boton-proyecto-1');
const botonesProyecto2 = document.querySelectorAll('.boton-proyecto-2');
const botonesProyecto3 = document.querySelectorAll('.boton-proyecto-3');
const botonesProyecto4 = document.querySelectorAll('.boton-proyecto-4');
const botonesProyecto5 = document.querySelectorAll('.boton-proyecto-5');
const botonesProyecto6 = document.querySelectorAll('.boton-proyecto-6');
const botonesProyecto7 = document.querySelectorAll('.boton-proyecto-7');
const botonesProyecto8 = document.querySelectorAll('.boton-proyecto-8');
const botonesProyecto9 = document.querySelectorAll('.boton-proyecto-9');
const botonesProyecto10 = document.querySelectorAll('.boton-proyecto-10');
// Secciones a donde llevaran los botones
const seccion0 = document.getElementById('proyecto0');
const seccion1 = document.getElementById('proyecto1');
const seccion2 = document.getElementById('proyecto2');
const seccion3 = document.getElementById('proyecto3');
const seccion4 = document.getElementById('proyecto4');
const seccion5 = document.getElementById('proyecto5');
const seccion6 = document.getElementById('proyecto6');
const seccion7 = document.getElementById('proyecto7');
const seccion8 = document.getElementById('proyecto8');
const seccion9 = document.getElementById('proyecto9');
const seccion10 = document.getElementById('proyecto10');
const allSeccion = document.querySelectorAll('.seccion');

console.log(document.querySelectorAll('.iconos-nav').classList);

function navegarProyectos(seccion){
  allSeccion.forEach((i) => {
    if (i.classList.contains('display')){
      i.classList.remove('display')
    }
  })
  seccion.classList.add('display');
}
function clickBotonProyecto(btnNav,seccion){
  if (!(btnNav.classList.contains('selected'))){
    document.querySelectorAll('.iconos-nav').forEach((i) => {
      if (i.classList.contains('selected')){
        i.classList.remove('selected')
      }
    })
    btnNav.classList.add('selected');
    navegarProyectos(seccion);
    localStorage.setItem('seccionActiva', seccion.id);
  }
}

botonNavProyecto0.addEventListener('click', (e) => clickBotonProyecto(e.target, seccion0))
botonesProyecto1.forEach((i) => {
  i.addEventListener('click', () => clickBotonProyecto(botonNavProyecto1, seccion1))
})
botonesProyecto2.forEach((i) => {
  i.addEventListener('click', () => clickBotonProyecto(botonNavProyecto2, seccion2))
})
botonesProyecto3.forEach((i) => {
  i.addEventListener('click', () => clickBotonProyecto(botonNavProyecto3, seccion3))
})
botonesProyecto4.forEach((i) => {
  i.addEventListener('click', () => clickBotonProyecto(botonNavProyecto4, seccion4))
})
botonesProyecto5.forEach((i) => {
  i.addEventListener('click', () => clickBotonProyecto(botonNavProyecto5, seccion5))
})
botonesProyecto6.forEach((i) => {
  i.addEventListener('click', () => clickBotonProyecto(botonNavProyecto6, seccion6))
})
botonesProyecto7.forEach((i) => {
  i.addEventListener('click', () => clickBotonProyecto(botonNavProyecto7, seccion7))
})
botonesProyecto8.forEach((i) => {
  i.addEventListener('click', () => clickBotonProyecto(botonNavProyecto8, seccion8))
})
botonesProyecto9.forEach((i) => {
  i.addEventListener('click', () => clickBotonProyecto(botonNavProyecto9, seccion9))
})
botonesProyecto10.forEach((i) => {
  i.addEventListener('click', () => clickBotonProyecto(botonNavProyecto10, seccion10))
})

const seccionGuardada = localStorage.getItem('seccionActiva');
if (seccionGuardada !== null) {
  const index = seccionGuardada.replace('proyecto', '');
  clickBotonProyecto(eval(`botonNavProyecto${index}`), eval(`seccion${index}`));
}

// Proyecto 1: Contador

const contador = document.getElementById('contador');
const botonMenos = document.getElementById('contador-menos');
const botonReinicio = document.getElementById('contador-restart');
const botonMas = document.getElementById('contador-mas');
const drawNega = document.getElementById('contador-negative');
const drawAngel = document.getElementById('contador-angel');

let contadorNumero = 0;

function colorContador (){
  if (contadorNumero < 0){
    contador.style.color = '#DB4857';
    drawNega.setAttribute('src', 'images/mnegative_draw.png');
    drawAngel.setAttribute('src', 'images/mangel_draw.png');

  } else if(contadorNumero > 0){
    contador.style.color = '#8DFF4B';
    drawNega.setAttribute('src', 'images/bnegative_draw.png');
    drawAngel.setAttribute('src', 'images/bangel_draw.png');
  } else{
    contador.style.color = '';
    drawNega.setAttribute('src', 'images/negative_draw.png');
    drawAngel.setAttribute('src', 'images/angel_draw.png');
  }
}

botonMenos.addEventListener('click', () => {
  contador.innerText = --contadorNumero
  localStorage.setItem('contador', contador.innerText);
  colorContador()
})
botonReinicio.addEventListener('click', () => {
  contadorNumero = 0;
  contador.innerText = contadorNumero;
  localStorage.setItem('contador', contador.innerText);
  colorContador()
})
botonMas.addEventListener('click', () => {
  contador.innerText = ++contadorNumero;
  localStorage.setItem('contador', contador.innerText);
  colorContador()
})

if (localStorage.getItem('contador') !== null){
  contador.innerText = localStorage.getItem('contador');
  contadorNumero = +contador.innerText;
  colorContador()
}

// Proyecto 2: Lista de tareas

const input = document.getElementById('ingresar-tarea');
const boton = document.getElementById('todolist-boton');
const listaDeTarea = document.getElementById('todolist');

console.log(boton);

function tareaCompletada(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada')
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
  localStorage.setItem('todolist', listaDeTarea.innerHTML);
}

function agregarTarea() {
  if (input.value) {
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    let iconos = document.createElement('div')
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);

    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', tareaCompletada)

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea)

    iconos.append(completar, eliminar);
    listaDeTarea.appendChild(tareaNueva);
    localStorage.setItem('todolist', listaDeTarea.innerHTML);
  } else {
    alert('Por favor ingresa una tarea.')
  }
}

boton.addEventListener('click', agregarTarea);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea()
  }
});

if (localStorage.getItem('todolist') !== null) {
  listaDeTarea.innerHTML = localStorage.getItem('todolist')
  listaDeTarea.querySelectorAll('.icono-completar').forEach(i => i.addEventListener('click', tareaCompletada));
  listaDeTarea.querySelectorAll('.icono-eliminar').forEach(i => i.addEventListener('click', eliminarTarea));
}

// Proyecto 3: Adivinar numero aleatorio

const inputAdivinar = document.getElementById('adivinar-input');
const dibujoAdivinar = document.getElementById('adivinar-draw');
const respuestaAdivinar = document.getElementById('adivinar-respuesta');
const intentosAdivinar = document.getElementById('adivinar-intentos');
const botonAdivinar = document.getElementById('adivinar-boton');
const botonNuevoJuego = document.getElementById('adivinar-reiniciar');

function generarNumeroRandom(){
  return Math.floor(Math.random() * 101)
}
let numeroRandom = generarNumeroRandom();
let intentos = 0;

function numeroEsMayor(){
  intentosAdivinar.innerText = `Intentos: ${++intentos}`;
  respuestaAdivinar.innerText = 'MI NUMERO ES MAS ALTO';
  respuestaAdivinar.style.color = '#4b7bff';
  dibujoAdivinar.setAttribute('src', 'images/upadivinar_draw.png');
}
function numeroEsMenor() {
  intentosAdivinar.innerText = `Intentos: ${++intentos}`;
  respuestaAdivinar.innerText = 'MI NUMERO ES MAS BAJO';
  respuestaAdivinar.style.color = '#DB4857';
  dibujoAdivinar.setAttribute('src', 'images/downadivinar_draw.png');
}
function numeroAdivinado() {
  if (intentos === 0){
    intentosAdivinar.innerText = 'Intentos: 0';
  }
  intentos = 0;
  respuestaAdivinar.innerText = 'LO HAS ADIVINADO';
  respuestaAdivinar.style.color = '#8DFF4B';
  dibujoAdivinar.setAttribute('src', 'images/winadivinar_draw.png');
  numeroRandom = generarNumeroRandom();
}
function adivinar(){
  if (inputAdivinar.value) {
    if(inputAdivinar.value != numeroRandom){
      if(inputAdivinar.value < numeroRandom){
        numeroEsMayor()
      }
      else{
        numeroEsMenor()
      }
    }
    else{
      numeroAdivinado()
    }
  }
}

botonAdivinar.addEventListener('click', adivinar);
inputAdivinar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    adivinar()
  }
});
inputAdivinar.addEventListener('input', () =>{
  if (inputAdivinar.value > 100){
    inputAdivinar.value = 100;
  } else if(inputAdivinar.value < 0){
    inputAdivinar.value = 0;
  }
})

botonNuevoJuego.addEventListener('click', () => {
  intentos = 0
  intentosAdivinar.innerText = 'Intentos: 0';
  respuestaAdivinar.innerText = 'JAMAS ADIVINARAS MI NUMERO';
  respuestaAdivinar.style.color = '';
  dibujoAdivinar.style.backgroundColor = '';
  inputAdivinar.value = null;
});

// Proyecto 4: Calculadora Basica xd

const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btncalc');

botones.forEach(i => {
  i.addEventListener('click', () => {
    const botonApretado = i.textContent;
    if(i.id === 'c'){
      pantalla.textContent = '0'
      return
    }
    if(i.id === 'borrar'){
      if (pantalla.textContent.length === 1 || pantalla.textContent === 'ERROR'){
        pantalla.textContent = '0';
      } else{
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return
    }
    if (i.id === 'igual') {
      try{
        const resultado = String(eval(pantalla.textContent));
        pantalla.textContent = (resultado === 'NaN' || resultado === 'Infinity') ? 'ERROR' : resultado;
      } catch{
        pantalla.textContent = 'ERROR';
      }
      return;
    }
    if(pantalla.textContent === '0'){
      if(/[+\-*/]/.test(botonApretado)){
        pantalla.textContent += botonApretado;
      } else {
        pantalla.textContent = botonApretado;
      }
    } else if(pantalla.textContent === 'ERROR'){
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  })
})

// Proyecto 5: Colores aleatorios

const hexText = document.getElementById('hex');
const hexBoton = document.getElementById('hex-boton');
const hexCopiar = document.getElementById('hex-copiar')
// La seccion 5 ya fue convertida en una constante en la linea 43

function generarHex() {
  let digitos = '0123456789ABCDEF';
  let hex = '#'

  for (i = 0; i < 6; i++){
    let indiceAleatorio = Math.floor(Math.random() * 16);
    hex += digitos[indiceAleatorio];
  }
  return hex
}

hexBoton.addEventListener('click', function(){
  const hexGenerado = generarHex();
  hexText.textContent = hexGenerado;
  seccion5.style.backgroundColor = hexGenerado;
  localStorage.setItem('ultimoHex', hexGenerado)
});
hexCopiar.addEventListener('click', (e) => {
  if (localStorage.getItem('ultimoHex') !== null){
    navigator.clipboard.writeText(localStorage.getItem('ultimoHex'));
    e.target.textContent = '¡Copiado!';
    setTimeout(() => e.target.textContent = 'Copiar', 2000);
  }
})

if (localStorage.getItem('ultimoHex') !== null) {
  hexText.textContent = localStorage.getItem('ultimoHex');
  seccion5.style.backgroundColor = localStorage.getItem('ultimoHex');
}

// Proyecto 6: Temporizador

const tempoDisplay = document.getElementById('tempo-display');
const tempoMinutos = document.getElementById('tempo-minutos');
const tempoSegundos = document.getElementById('tempo-segundos');
const tempoIniciar = document.getElementById('tempo-iniciar');
const tempoPausar = document.getElementById('tempo-pausar');
const tempoReiniciar = document.getElementById('tempo-reiniciar');
const tempoMensaje = document.getElementById('tempo-mensaje');

let tempoInterval = null;
let tiempoRestante = 0;
let corriendo = false;

function dosDigitos(numero) {
  if (numero < 10) {
    return '0' + numero;
  }
  return '' + numero;
}

function actualizarDisplay() {
  const mins = Math.floor(tiempoRestante / 60);
  const segs = tiempoRestante % 60;
  tempoDisplay.textContent = dosDigitos(mins) + ':' + dosDigitos(segs);
}

function inter() {
  if (tiempoRestante <= 0) {
    clearInterval(tempoInterval);
    tempoInterval = null;
    corriendo = false;
    tempoMensaje.textContent = '¡Tiempo terminado!';
    return;
  }
  tiempoRestante--;
  actualizarDisplay();
}

tempoMinutos.addEventListener('input', () => {
  if (tempoMinutos.value > 60 || tempoMinutos.value.length === 3) {
    tempoMinutos.value = 60;
  }
  if (tempoMinutos.value < 0) {
    tempoMinutos.value = 0;
  }
});

tempoSegundos.addEventListener('input', () => {
  if (tempoSegundos.value > 60 || tempoSegundos.value.length === 3) {
    tempoSegundos.value = 60;
  }
  if (tempoSegundos.value < 0) {
    tempoSegundos.value = 0;
  }
});

tempoIniciar.addEventListener('click', () => {
  if (corriendo) {
    return;
  }
  const mins = parseInt(tempoMinutos.value);
  const segs = parseInt(tempoSegundos.value);
  tiempoRestante = mins * 60 + segs;
  if (tiempoRestante === 0) {
    return;
  }
  tempoMinutos.value = 0;
  tempoSegundos.value = 0;
  tempoMensaje.textContent = '';
  corriendo = true;
  tempoInterval = setInterval(inter, 1000);
});

tempoPausar.addEventListener('click', () => {
  if (corriendo) {
    clearInterval(tempoInterval);
    tempoInterval = null;
    corriendo = false;
    tempoPausar.textContent = 'Reanudar';
  } else if (!corriendo && tiempoRestante > 0) {
    corriendo = true;
    tempoInterval = setInterval(inter, 1000);
    tempoPausar.textContent = 'Pausar';
  }
});

tempoReiniciar.addEventListener('click', () => {
  clearInterval(tempoInterval);
  tempoInterval = null;
  corriendo = false;
  tiempoRestante = 0;
  tempoDisplay.textContent = '00:00';
  tempoMensaje.textContent = '';
  tempoPausar.textContent = 'Pausar';
});

// Proyecto 7: Contraseña

const rangeContra = document.getElementById('contra-range');
const lengthTextContra = document.getElementById('contra-range-value');
const checkboxContra = document.querySelectorAll('.contra-elegir');
const minusContra = document.getElementById('minusculas');
const mayusContra = document.getElementById('mayusculas');
const numberContra = document.getElementById('numeros');
const symbolContra = document.getElementById('simbolos');
const contra = document.getElementById('contra');
const botonContra = document.getElementById('contra-generar');
const copiarContra = document.getElementById('contra-copiar');

const minusculas = 'abcdefghijklmnopqrstuvwxyz';
const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeros = '0123456789';
const simbolos = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

let contraseñaGenerada = '';

rangeContra.addEventListener('input', () => {
  lengthTextContra.textContent = 'Tamaño: ' + rangeContra.value;
});

checkboxContra.forEach(check => {
  check.addEventListener('change', () => {
    let hayAlgunoMarcado = false;
    for (let i = 0; i < checkboxContra.length; i++) {
      if (checkboxContra[i].checked) {
        hayAlgunoMarcado = true;
        break;
      }
    }
    if (!hayAlgunoMarcado) {
      check.checked = true;
    }
  });
});

function caracterRandom(string) {
  return string[Math.floor(Math.random() * string.length)];
}

function revolverContraseña(string) {
  let resultado = '';
  let array = string.split('');
  while (array.length > 0) {
    const indice = Math.floor(Math.random() * array.length);
    resultado += array[indice];
    array.splice(indice, 1);
  }
  return resultado;
}

function generarContraseña() {
  const longitud = parseInt(rangeContra.value);
  let caracteres = '';
  let contraseña = '';

  if (minusContra.checked) {
    caracteres += minusculas;
    contraseña += caracterRandom(minusculas);
  }
  if (mayusContra.checked) {
    caracteres += mayusculas;
    contraseña += caracterRandom(mayusculas);
  }
  if (numberContra.checked) {
    caracteres += numeros;
    contraseña += caracterRandom(numeros);
  }
  if (symbolContra.checked) {
    caracteres += simbolos;
    contraseña += caracterRandom(simbolos);
  }

  while (contraseña.length < longitud) {
    contraseña += caracterRandom(caracteres);
  }

  contraseña = revolverContraseña(contraseña);
  contraseñaGenerada = contraseña;
  contra.textContent = contraseña;
}

botonContra.addEventListener('click', () => {
  generarContraseña();
});

copiarContra.addEventListener('click', (e) => {
  if (contraseñaGenerada !== '') {
    navigator.clipboard.writeText(contraseñaGenerada);
    e.target.textContent = "¡Copiado!";
    setTimeout(() => e.target.textContent = 'Copiar', 2000);
  }
});

// Proyecto 8: Modo oscuro/claro

function modoOscuroToggle(){
  allSeccion.forEach((i) => {
    if (i.id !== 'seccion5'){
      i.classList.toggle('fondo-oscuro')
    }
  })
  document.querySelector('nav').classList.toggle('fondo-oscuro');
  document.getElementById('sidebar').classList.toggle('fondo-oscuro');

  // Guardar estado
  const estaActivo = document.getElementById('sidebar').classList.contains('fondo-oscuro');
  localStorage.setItem('modoOscuro', estaActivo);
}

const modoOscuro = document.querySelector('.modo-oscuro');
modoOscuro.addEventListener('click', modoOscuroToggle);

if(localStorage.getItem('modoOscuro') === 'true'){
  allSeccion.forEach((i) => {
    if (i.id !== 'seccion5'){
      i.classList.add('fondo-oscuro')
    }
  })
  document.querySelector('nav').classList.add('fondo-oscuro');
  document.getElementById('sidebar').classList.add('fondo-oscuro');

}
if(localStorage.getItem('modoOscuro') === 'true' || (localStorage.getItem('ultimoHex') !== null)){
  document.documentElement.classList.add('no-transicion');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('no-transicion');
    });
  });
}

// Proyecto 9: Piedra, papel o tijera

const botonPiedra = document.getElementById('boton-piedra');
const botonPapel = document.getElementById('boton-papel');
const botonTijera = document.getElementById('boton-tijera');
const resultado = document.getElementById('pelea-resultado');
const peleaContador = document.getElementById('pelea-contador');
const jugadorDraw = document.getElementById('jugador-draw');
const botDraw = document.getElementById('bot-draw');
const botonReinicioPelea = document.getElementById('reinicio');

let ganadas = 0;
let perdidas = 0;

function numeroRandomPelea(){
  return Math.floor(Math.random() * 3)
}

function empate(){
  resultado.innerText = 'Empate';
  resultado.style.color = 'gray';
}
function perdiste(){
  resultado.innerText = '¡Perdiste!';
  resultado.style.color = '#DB4857';
  peleaContador.innerText = `${ganadas} / ${++perdidas}`
}
function ganaste(){
  resultado.innerText = '¡Ganaste!';
  resultado.style.color = '#8DFF4B';
  peleaContador.innerText = `${++ganadas} / ${perdidas}`
}

function eligesPiedra(r){
  jugadorDraw.setAttribute('src', 'images/j_hand-r.png')
  if (r === 0){
    botDraw.setAttribute('src', 'images/b_hand-r.png');
    empate()
  }else if (r === 1){
    botDraw.setAttribute('src', 'images/b_hand-p.png');
    perdiste()
  }else{
    botDraw.setAttribute('src', 'images/b_hand-s.png');
    ganaste()
  }
}
function eligesPapel(r){
  jugadorDraw.setAttribute('src', 'images/j_hand-p.png')
  if (r === 0){
    botDraw.setAttribute('src', 'images/b_hand-r.png');
    ganaste()
  }else if (r === 1){
    botDraw.setAttribute('src', 'images/b_hand-p.png');
    empate()
  }else{
    botDraw.setAttribute('src', 'images/b_hand-s.png');
    perdiste()
  }
}
function eligesTijera(r){
  jugadorDraw.setAttribute('src', 'images/j_hand-s.png');
  if (r === 0){
    botDraw.setAttribute('src', 'images/b_hand-r.png');
    perdiste()
  }else if (r === 1){
    botDraw.setAttribute('src', 'images/b_hand-p.png');
    ganaste()
  }else{
    botDraw.setAttribute('src', 'images/b_hand-s.png');
    empate()
  }
}

function eleccion(j){
  if (j === 0){
    eligesPiedra(numeroRandomPelea())
  } else if (j === 1){
    eligesPapel(numeroRandomPelea())
  } else{
    eligesTijera(numeroRandomPelea())
  }
}

botonPiedra.addEventListener('click',()=>{
  eleccion(0)
})
botonPapel.addEventListener('click',()=>{
  eleccion(1)
})
botonTijera.addEventListener('click',()=>{
  eleccion(2)
})
botonReinicioPelea.addEventListener('click', () => {
  ganadas = 0;
  perdidas = 0;
  peleaContador.innerText = '0 / 0';
  resultado.innerText = 'VERSUS';
  resultado.style.color = '#f59622';
  jugadorDraw.setAttribute('src', 'images/j_hand.png');
  botDraw.setAttribute('src', 'images/b_hand.png');
});

// Proyecto 10: Galería

const galeriaItems = document.querySelectorAll('.galeria-item');
const galeriaFiltros = document.querySelectorAll('.galeria-filtro');
const galeriaBuscador = document.getElementById('galeria-buscador');
const galeriaModal = document.getElementById('galeria-modal');
const galeriaModalImg = document.getElementById('galeria-modal-img');
const galeriaModalNombre = document.getElementById('galeria-modal-nombre');

let filtroActivo = 'Todas';

function aplicarFiltros() {
  const busqueda = galeriaBuscador.value.toLowerCase();
  for (let i = 0; i < galeriaItems.length; i++) {
    const item = galeriaItems[i];
    const nombre = item.getAttribute('data-nombre').toLowerCase();
    const categoria = item.getAttribute('data-categoria');

    const coincideCategoria = filtroActivo === 'Todas' || categoria === filtroActivo;
    const coincideBusqueda = nombre.includes(busqueda);

    if (coincideCategoria && coincideBusqueda) {
      item.classList.remove('galeria-oculta');
    } else {
      item.classList.add('galeria-oculta');
    }
  }
}

galeriaFiltros.forEach(boton => {
  boton.addEventListener('click', () => {
    filtroActivo = boton.value;
    aplicarFiltros();
  });
});

galeriaBuscador.addEventListener('input', () => {
  aplicarFiltros();
});

for (let i = 0; i < galeriaItems.length; i++) {
  galeriaItems[i].addEventListener('click', () => {
    const img = galeriaItems[i].querySelector('.galeria-img');
    const nombre = galeriaItems[i].getAttribute('data-nombre');
    galeriaModalImg.src = img.src;
    galeriaModalNombre.textContent = nombre;
    galeriaModal.classList.add('galeria-modal-abierto');
  });
}

galeriaModal.addEventListener('click', () => {
  galeriaModal.classList.remove('galeria-modal-abierto');
});