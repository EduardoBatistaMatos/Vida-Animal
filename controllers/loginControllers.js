const loginModels = require("../models/loginModels.js");
module.exports = {
    login,
    validarPSW,
};

function login(req, res) {
    console.log('Carregando Pagina de Login');
    res.render('login.ejs', {
        title: "Login",
        mensagem: "Senha do Usuário"
    });
}

function validarPSW(req, res) {
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    console.log("Usuário recebido: " + usuario);
    console.log("Senha recebida: " + senha);

    loginModels.validarPSW(usuario, senha, function(erro, results) {
        if (erro) {
            throw erro;
        }

        if (results.length > 0) {
            console.log("Usuário Válido");
            res.render("sobre")
            
        } else {
            console.log("Dados Inválidos!!!");
            res.render("login.ejs", {
                title: "Login",
                mensagem: "Dados Inválidos"
            });
        }
    });
}
