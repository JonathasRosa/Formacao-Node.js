//Para executar a função calculadora em outro arquivo eu preciso exportar a função que eu quero utilizar.
//Preciso trabalhar com módulos.

function soma(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

module.exports = {
    soma,
    sub,
    mult,
    div
}