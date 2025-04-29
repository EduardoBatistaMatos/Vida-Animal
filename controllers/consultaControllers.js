const consultaModels = require("../models/consultaModels");

module.exports = {
    indexConsulta,
    consulta
};

// Função para renderizar a página inicial de consulta
function indexConsulta(req, res) {
    res.render('consulta', { title: "Consulta" });
}

// Atualizando o Controller
function consulta(req, res) {
    console.time("consulta");
    console.log("Estou aqui");
    
    consultaModels.consulta(function (err, resultado) {
        if (err) {
            throw err;
        } else {
            console.log("Busquei consulta no Model...");
            console.log(resultado);
            console.timeEnd("consulta");

            // Passando o resultado para o EJS
            return res.render('consulta', { title: "Consulta", feedbacks: resultado });
        }
    });
}








