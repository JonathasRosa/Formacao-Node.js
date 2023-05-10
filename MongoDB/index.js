const mongoose = require("mongoose");
const articleModel = require("./article")

mongoose.connect("mongodb://localhost:27017/", {useNewUrlParser: true}, {useUnifiedTopology: true});

const Article = mongoose.model("Article", articleModel);

/*
// Cadastro
const artigo = new Article({
    title: "Olá mundo", 
    author:"Jhon", 
    body:"jbdcsb",
    especial: true,
    resume: {
        content:"bla bla bla",
        author: "Teste!!"
    }
});


const mongoose = require("mongoose");
const articleModel = require("./article");

mongoose.connect("mongodb://localhost:27017/", {useNewUrlParser: true}, {useUnifiedTopology: true});

const Article = mongoose.model("Article", articleModel);
/*
//Atualizando dados

Article.findByIdAndUpdate("Id do dado aqui",{
    title:"Angular do Zero",
    author: "John",
    body: "Angular 2"
}).then(()=>{
    console.log("Update Article.")
}).cath(err => {
    console.log(err)
});
*/
/*Deletando dados
Article.findByIdAndDelete("id aqui.").then(()=>{
    console.log("Dado removido");
}).catch(err => {
    console.log(err);
});
*/



/*
// Fazendo buscas, utilizando a variável findOne vai buscar o primeiro registro
Article.find({'_id' : "id aqui."}).then(article =>{
    console.log(article)
}).catch(err =>{
    console.log(err)
});


*/
/* Busca de dados
Article.find({}).then(articles =>{
    console.log(articles);
}).catch( err =>{
    console.log(err);
});*/


/* Cadastro
const artigo = new Article({
    title: "Olá mundo", 
    author:"Jhon", 
    body:"jbdcsb",
    especial: true,
    resume: {
        content:"bla bla bla",
        author: "Teste!!"
    }
})