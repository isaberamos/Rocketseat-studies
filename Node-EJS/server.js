// O server é para renderizar o html

const express = require('express');

const app = express();

// informando como renderizar o html
app.set("view engine", "ejs");

// criando a rota
// o app carrega o que tem no express
// quando chama a home aí executa a função
app.get("/", function (req, res) {
    const items = [{
        title: "D",
        message: " esenvolver aplicações/serviços de forma fácil"
    },
    {
        title: "E",
        message: " JS usa Javascript para renderizar HTML"
    },
    {
        title: "M",
        message: " uito fácil de usar"
    },
    {
        title: "A",
        message: " morzinho"
    },
    {
        title: "I",
        message: " nstall ejs"
    },
    {
        title: "S",
        message: " intaxe simples"
    }
];
    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

// criando outra rota
app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

// o app carrega tudo do express e o listen é uma função do express que fica ouvindo uma porta
app.listen(8080);
console.log("Rodando");
