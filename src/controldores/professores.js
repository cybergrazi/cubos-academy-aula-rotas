const professores = require("../bancodedados");

const filtrarProfessores = (req, res) => {
    const { stack } = req.query //desestruturação para usar no if
    let resultado = professores;
    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        });
    }
    res.send(resultado);
};

const encontrarUmProfessor = (req, res) => {
    const professorEncontrado = professores.find((professor) => {
        return professor.id === Number(req.params.id);
    });
    res.send(professorEncontrado);
};

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
};