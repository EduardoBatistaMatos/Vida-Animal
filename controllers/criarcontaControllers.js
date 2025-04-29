const criarcontaModels= require("../models/criarcontaModels.js");
module.exports = {
    indexCriarconta,
    criarConta
};

function indexCriarconta(req, res) {
    res.render('criar_conta.ejs', {
        title: "Sobre"
    });
}

function criarConta(req, res) {
    const nome = req.body.name;
    const idade = req.body.age;
    const usuario = req.body.usuario;
    const senha = req.body.senha;
    const confirma = req.body.confirma;

    console.log("Nome recebido: " + nome);
    console.log("Idade recebida: " + idade);
    console.log("Usuário recebido: " + usuario);
    console.log("Senha recebida: " + senha);
    console.log("Confirmação de senha recebida: " + confirma);

    if (senha !== confirma) {
        console.log("O erro está aqui");
        res.render('criar_conta.ejs');
        
    }
    
            

    else{criarcontaModels.criarConta(nome, idade, usuario, senha, function(erro, results) {
        if (erro) {
            throw erro;
        }

        if (results.length > 0) {
            console.log("Usuário Válido");
            res.render("login");
        } else {
            console.log("Dados Inválidos!!!");
            res.render("login.ejs", {
                title: "Login",
                mensagem: "Senha do Usuário"
            });
        }
    });
}
}

