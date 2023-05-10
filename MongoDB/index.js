const mongoose = require("mongoose");
const articleModel = require("./article")

mongoose.connect("mongodb://localhost:27017/", {useNewUrlParser: true}, {useUnifiedTopology: true});

const Article = mongoose.model("Article", articleModel);


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

artigo.save().then(()=>{
    console.log("Artigo salvo com sucesso!");
}).catch(err =>{
    console.log(err);
});