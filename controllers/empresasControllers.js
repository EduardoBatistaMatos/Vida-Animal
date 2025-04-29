const empresasModels = require("../models/empresasModels.js");

module.exports = {
    indexEmpresas,
    cadastro,
};

function indexEmpresas(req, res) {
    res.render('empresa.ejs', {
        title: "Empresa",
        mensagem: "",
    });
}

function cadastro(req, res) {
    const razao_social = req.body.rz;
    const cnpj = req.body.cnpj;
    const cep = req.body.cep;

    console.log("Razão Social recebida: " + razao_social);
    console.log("CNPJ recebido: " + cnpj);
    console.log("CEP recebido: " + cep);

    // A verificação do CNPJ deve ser feita no servidor, não no cliente
    if (cnpj.length < 14) {
       
        return res.status(400).render("empresa.ejs", {
            title: "Empresa",
            mensagem: "CNPJ inválido"
        });
    } else {
        empresasModels.cadastro(razao_social, cnpj, cep, function(erro, results) {
            if (erro) {
                console.error(erro);
                return res.status(500).render("empresa.ejs", {
                    title: "Empresa",
                    mensagem: "Erro ao cadastrar empresa"
                });
            } else {
                console.log("Cadastro feito com Sucesso !!!");
                res.render("empresa.ejs", {
                    title: "Empresa",
                    mensagem: "Cadastro realizado com sucesso!"
                });
            }
        });
    }
}
