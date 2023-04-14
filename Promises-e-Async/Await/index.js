//callback
function enviarEmail(corpo, para) {
    setTimeout(() => {
        console.log(`
        Para: ${para}
        -----------------------
        ${corpo}
        -----------------------
        De: Jonathas Rosa     
        `);
    }, 8000);
}
console.log("Inicio do envio de e-mail!")
enviarEmail("Oi, seja bem vindo","jsilvarosa85@gmail.com")
console.log("Seu e-mail foi enviado, deve chegar em minutos!")
console.log("TUDO OK!")