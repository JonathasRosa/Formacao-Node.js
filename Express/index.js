/*
    O Express é um framework para desenvolvimento web backend com o Node.js, uma forte biblioteca que ajuda no desenvolvimento com o NODE.JS.

    NPM: (NODE PACKAGE MANAGER) é o gerenciador de pacotes do node.
*/
//Quando criar uma rota tenho que apontar para onde ela vai e o que ela faz.
//REQ: são os dados enviados pelo usuário.
//RES: É a resposta que vai ser enviada para o usuário.


app.get("/blog", function (req, res) {
    res.send("Bem vindo ao meu blog!")
});

app.get("/canal/youtube/", function (req, res) {
    res.send("Bem vindo ao meu canal!")
});

app.get("/Ola/:nome", function (req, res) {
    var nome = req.params.nome;
    res.send("<h1>Oi " + nome + " </h1>")
});

const express = require("express") //Importando o express 
const app = express(); //Iniciando o express

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
});