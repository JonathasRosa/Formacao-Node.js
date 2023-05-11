let express = require("express");
let app = express();

app.get("/",(req, res)=>{
    res.json({success: true})
})

app.listen(3131,()=>{
    console.log("Servidor rodando na porta 3131.")
})

/*
module.exports = {
    soma: function(a,b){
        return a + b;
    },
    mult: function(a,b){
        return a * b;
    },
    dimin: function(a,b){
        return a - b;
    }
};
*/