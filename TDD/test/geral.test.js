let supertest = require("supertest");
let request = supertest("http://localhost:3131");//Aqui passar a url da aplicação que está sendo desenvolvida.

test("Aaplicação deve responder na porta 3131",() => {// Outra forma de trabalhar é com async/await, mas precisa colocar try-cacth.
    return request.get("/").then(res => expect(res.statusCode).toEqual(200));
    //let res = await request.get("/");
    //expect(res.statusCode).toEqual(200);
})