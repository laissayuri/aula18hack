const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cadastro = require("./data/cadastro.json");


const app = express();
app.set("view engine", "ejs");
app.use("/assets", express.static("static"));
app.use(bodyParser.urlencoded());

app.get("", (req, res) =>{ //request e response
    res.render("index"); // se for colocar com o html direto: res.send(`codigo do html`);
});

app.get("/produtos", (req, res) =>{ //request e response
    fs.readFile("data/cadastro.json", {encoding: "UTF-8"}, function(erro,dados){
        let produtos =[];
        
        if(!erro){
            produtos= JSON.parse(dados);
        }

        res.render('produtos', {'produtos': produtos});
    });
    // res.render("produtos"); // se for colocar com o html direto: res.send(`codigo do html`);
});

app.get("/contato", (req, res) =>{ //request e response
    res.render("contato"); // se for colocar com o html direto: res.send(`codigo do html`);
});

app.get("/cadastroprod", (req, res) =>{ //request e response
    res.render('cadastro');
});

app.post("/cadastroprod", (req, res) => {
    
    fs.readFile("data/cadastro.json", {encoding: "UTF-8"}, function(erro,dados){
        let produtos =[];
        
        if(!erro){
            produtos= JSON.parse(dados);
        }

        produtos.push(req.body);

        let produtosString = JSON.stringify(produtos);

        fs.writeFile("data/cadastro.json", produtosString, (err) =>{
            res.render("produtos");
        });
    });
});

app.listen(3000, () => { // 3000 é porta para acessar o meu computador, que virou um servidor (ip:3000) (se eu for acessar o meu pc, localhost:3000)
    console.log("Servidor Inicializado");
});