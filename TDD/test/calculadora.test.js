let app = require('../src/app');

describe("Operações basicas",()=>{

    test("Deve retornar o valor 10 ao somar 5+5",()=>{
        let resultado = app.soma(5,5);
        expect(resultado).toEqual(10);
    });
    test("Deve retornar o valor 10 ao multiplicar 2 por 5",()=>{
        let resultado = app.mult(2,5);
        expect(resultado).toEqual(10);
    });
    test("Deve retornar o valor 3 ao diminuir 2 de 5",()=>{
        let resultado = app.dimin(5, 2);
        expect(resultado).toEqual(3);
    });
    
})