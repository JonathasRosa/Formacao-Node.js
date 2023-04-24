function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(3)
        },1500)
    })
}

function buscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("jsilvarosa@gmail.com")
        }, 2500)
    })
}

function enviarEmail(corpo, para) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var deuErro = true;
            //Só pode passar um parametro nas promises tanto no resolver quanto no reject
            if (!deuErro) {
                resolve({time: 6, to: "jsilvarosa@gmail.com"});//Promessa OK!
            } else {
                reject("Fila cheia");//Foi mal, deu erro.
            }
        }, 3000)
    });
}

enviarEmail("Olá mundo!", "jsilvarosa@gmail.com").then(({ time, to }) => {
    //O then é executado quando a promise é cumprida.(resolve)
    console.log(`
    Time: ${time}
    -------------------
    To: ${to}
    `)
}).catch((erro) => {
    //é executado quando a promise nãe é cumprida(reject)
    console.log("DEU ERRO! :( " + erro)
})
/*
//then e catch são métodos utilizados e executados juntamente com o promises.

//Promises Aninhadas (uma dentro da outra), mas evite usar pois virará uma bagunça.
console.log("Inicio")
pegarId().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail("Olá, como vai?", email).then(() => {
            console.log("E-mail enviado, para o usuário com id: "+ id)
        }).catch(err => {
            console.log(err);
        })
    })
})
console.log("Fim.");*/

//ou

async function principal() {
    var id = await pegarId();
    var email = await buscarEmailNoBanco(id);
    enviarEmail("Olá, como vai?", email).then(() => {
        console.log("Email enviado!")
    }).catch((err) => {
        console.log(err)
    })
}
principal();
/*
//Async - Await

function pegarUsuarios() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
              { name: "Jonathas", lang: "TS" },
              { name: "Jefferson", lang: "C#" },
              { name: "Junior", lang: "Python" },
            ]);
        }, 2500)
    }) 
}

async function principal() {
    var usuarios = await pegarUsuarios();
    console.log(usuarios);
}
principal();
*/
//Tray - catch

async function principal() {
  var id = await pegarId();
  var email = await buscarEmailNoBanco(id);
    try {
      enviarEmail("Olá, como vai?", email);
      console.log("Email enviado!");
    } catch(err) {
        console.log(err);
    };
}
principal();