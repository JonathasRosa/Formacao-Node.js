/*
    O Express é um framework para desenvolvimento web backend com o Node.js, uma forte biblioteca que ajuda no desenvolvimento com o NODE.JS.

    NPM: (NODE PACKAGE MANAGER) é o gerenciador de pacotes do node.
*/
//Quando criar uma rota tenho que apontar para onde ela vai e o que ela faz.
//REQ: são os dados enviados pelo usuário.
//RES: É a resposta que vai ser enviada para o usuário.

const express = require("express") //Importando o express 
const app = express(); //Iniciando o express

app.get("/", function (req, res) {
    res.send("Bem vindo ao meu site!")
})

app.get("/blog/ :artigo?", function (req, res) {
    var artigo = req.params.artigo;
    if (artigo) {
      res.send("<h2>Artigo: " + artigo + " </h2>")
    } else {
      res.send("Bem vindo ao meu blog!");  
    }
    
});

app.get("/canal/youtube/", function (req, res) {
    var canal = req.query["canal"];//Query está deixando em desus.
    if (canal) {
        res.send(canal);
    } else {
        res.send("Nenhum canal fornecido!")
    }
});

app.get("/Ola/:nome/ :empresa", function (req, res) {
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " do " + empresa + " </h1>")
});


app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
});