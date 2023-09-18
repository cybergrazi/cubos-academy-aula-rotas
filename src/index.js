const express = require("express");
const {
    filtrarProfessores,
    encontrarUmProfessor
} = require("./controldores/professores")

const app = express();

const primeiroIntermediario = (req, res, next) => { // intermediário independente
    console.log("Passei no primeiro intermediário");
    next();
};

const segundoIntermediario = (req, res, next) => {
    console.log("Passei no segundo intermediário");
    next();
};

const intermediarioDaRota = (req, res, next) => { // intermediário na rota
    console.log("Passei no intermediário da rota");
    next();
};

app.use(primeiroIntermediario);
app.use(segundoIntermediario);

// localhost:3000/professores
app.get("/professores", intermediarioDaRota, filtrarProfessores); // intermediário na rota chamado aqui

// localhost:3000/professores/2
app.get("/professores/:id", encontrarUmProfessor);

app.listen(3000);