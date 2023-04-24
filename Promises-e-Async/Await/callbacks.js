//callback
function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
       /* console.log(`
        Para: ${para}
        -----------------------
        ${corpo}
        -----------------------
        De: Jonathas Rosa     
        `)*/
        var deuErro = true;
        if (deuErro) {
            callback("O envio do e-mail falhou!");
        } else {
            callback();
        }
        
    }, 5000);
}
console.log("Inicio do envio de e-mail!")
enviarEmail("Oi, seja bem vindo", "jsilvarosa85@gmail.com", (erro) => {
    if (erro == undefined) {
        console.log("TUDO OK!")
    } else {
       console.log("Opa deu erro: " + erro) 
    }
});
