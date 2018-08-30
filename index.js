const express = require('express');


const app = express();
app.set("view engine", "ejs");
app.use("/assets", express.static("static"));

app.get("", (req, res) =>{ //request e response
    res.render("index"); // se for colocar com o html direto: res.send(`codigo do html`);
});

app.get("/produtos", (req, res) =>{ //request e response
    res.render("produtos"); // se for colocar com o html direto: res.send(`codigo do html`);
});

app.get("/contato", (req, res) =>{ //request e response
    res.render("contato"); // se for colocar com o html direto: res.send(`codigo do html`);
});

app.get("/cadastroprod", (req, res) =>{ //request e response
    res.render("cadastro"); // se for colocar com o html direto: res.send(`codigo do html`);
});

app.listen(3000, () => { // 3000 é porta para acessar o meu computador, que virou um servidor (ip:3000) (se eu for acessar o meu pc, localhost:3000)
    console.log("Servidor Inicializado");
});