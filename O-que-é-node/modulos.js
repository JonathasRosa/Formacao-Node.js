//Módulos são formas de dividir em partes do seu código.
/*
    Para eu utilizar a função que está em 
    outro arquivo eu preciso requerer
    (utilizando um RIQUIRE) dentro de 
    uma variável.
*/

var calculadora = require("./calculadora");

console.log(calculadora.soma(35, 85));
console.log(calculadora.sub(35, 85));
console.log(calculadora.mult(35, 85));
console.log(calculadora.div(35, 85));
