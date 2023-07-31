// script.js
// Estructura de datos para almacenar los textos fijos y colaborativos
let textos = [];
let idTexto = 0;

// Referencias a los elementos del DOM
let inputFrase;
let inputConector;
let btnEnviar;
let mosaicoTextos;
let textoSeleccionado;

// Paleta de colores
const colores = ["#c19a6b", "#dbb18e", "#f1dca9", "#e5aa80", "#d9815a"];

function setup() {
  inputFrase = select('#input-frase');
  inputConector = select('#input-conector');
  btnEnviar = select('#btn-enviar');
  mosaicoTextos = select('#mosaico-textos');
  textoSeleccionado = select('#texto-seleccionado');

  btnEnviar.mousePressed(agregarTexto);
  selectTextosColaborativos();
}

let textoSeleccionadoId = null; // Agregamos una variable para guardar el ID del texto fijo seleccionado

function agregarTexto() {
  const frase = inputFrase.value().trim();
  const conector = inputConector.value().trim();
  if (frase !== '' && conector !== '') {
    const textoEnEdicion = textoSeleccionado.html() !== '';
    if (textoEnEdicion) {
      const textoFijo = textos.find(texto => texto.id === textoSeleccionadoId);
      textoFijo.texto += ' ' + frase + ' ' + conector; // Agregamos tanto la frase como el conector al texto fijo en edición
      actualizarMosaico();
    } else {
      agregarTextoColaborativo(frase, conector);
      inputFrase.value('');
    }
    inputConector.value('');
    textoSeleccionado.html('');
    textoSeleccionadoId = null;
  }
}

function agregarTextoColaborativo(frase, conector) {
  const color = obtenerColorAleatorio();
  const grosor = obtenerGrosorAleatorio();
  const textoColaborativo = {
    id: idTexto++,
    texto: frase + ' ' + conector,
    estilo: `color: ${color}; font-weight: ${grosor};`
  };
  textos.push(textoColaborativo);
  actualizarMosaico();
}

function obtenerColorAleatorio() {
  const color = random(colores);
  return color;
}

function obtenerGrosorAleatorio() {
  const grosor = random(['normal', 'bold']);
  return grosor;
}

function selectTextosColaborativos() {
  const textosColaborativos = selectAll('.texto-colaborativo');
  textosColaborativos.forEach(textoColaborativo => {
    textoColaborativo.mousePressed(() => seleccionarTextoColaborativo(textoColaborativo));
  });
}

function seleccionarTextoColaborativo(texto) {
  const textoEnEdicion = textoSeleccionado.html() !== '';
  if (!textoEnEdicion) {
    textoSeleccionado.html(texto.html());
    textoSeleccionado.style('background-color', '#f2f2f2');
    textoSeleccionadoId = parseInt(texto.elt.id); // Guardamos el ID del texto fijo seleccionado
  }
}

function actualizarMosaico() {
  mosaicoTextos.html('');
  textos.forEach(texto => {
    const textoDiv = createDiv(texto.texto);
    textoDiv.class('texto-colaborativo');
    textoDiv.attribute('style', texto.estilo); // Asignar estilo al texto colaborativo
    textoDiv.id(texto.id);
    mosaicoTextos.child(textoDiv);
  });
  selectTextosColaborativos();
}
