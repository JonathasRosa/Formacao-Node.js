let express = require("express");
let app = express();

app.get("/",(req, res)=>{
    res.json({success: true})
})

module.exports = app;

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