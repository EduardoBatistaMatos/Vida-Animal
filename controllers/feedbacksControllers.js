const feedbacksModels = require("../models/feedbacksModels");

module.exports = {
    indexFeedbacks,
    lista,
    cad,
};

// Função para exibir feedbacks na página inicial
function indexFeedbacks(req, res) {
    feedbacksModels.lista().then(results => {
        let mensagem = '';
        
        // Verifica se o parâmetro 'status' está presente na URL e tem valor 'success'
        if (req.query.status === 'success') {
            mensagem = 'Cadastro realizado com sucesso !!!';
        }

        // Passa o resultado da consulta para o EJS corretamente
        res.render('feedbacks', {
            title: "Feedback",
            mensagem: mensagem,  // Passa a mensagem de sucesso ou erro
            razao_social: results // Passa as empresas (resultados da consulta)
        });
    }).catch(error => {
        console.error("Erro ao obter razões sociais:", error);
        res.status(500).render("feedbacks", {
            title: "Feedback",
            mensagem: "Erro ao carregar empresas",
            razao_social: []  // Passa um array vazio se ocorrer um erro
        });
    });
}


// Função para listar as razões sociais das empresas
function lista() {
    return new Promise((resolve, reject) => {
        const m_sql = 'SELECT razao_social FROM empresas';  // Consulta no banco de dados
        conexao.query(m_sql, [], (error, results) => {
            if (error) {
                console.error("Erro ao buscar razões sociais:", error);
                reject(error);  // Rejeita a Promise se houver erro
            } else {
                console.log("Resultados obtidos:", results);  // Verifique os dados aqui
                resolve(results);  // Resolve a Promise com os resultados da consulta
            }
        });
    });
}


// Função para cadastrar feedback
function cad(req, res) {
    const razao_social = req.body.razao_social;
    const feedback = req.body.feedback;

    console.log("req.body:", req.body); // Verifique se o valor está sendo enviado

    // Verifica se a razão social não foi selecionada
    if (!razao_social || razao_social.trim() === "") {
        // Se a razão social não for selecionada, carrega as empresas novamente
        feedbacksModels.lista().then(results => {
            return res.render('feedbacks.ejs', {
                title: "Feedbacks",
                mensagem: "Selecione uma empresa !!!",
                razao_social: results // Passa as empresas para a view
            });
        }).catch(error => {
            console.error("Erro ao carregar empresas:", error);
            return res.status(500).render('feedbacks.ejs', {
                title: "Feedbacks",
                mensagem: "Erro ao carregar empresas",
                razao_social: [] // Passa uma lista vazia em caso de erro ao carregar empresas
            });
        });
    }

    // Se a razão social foi selecionada, continua o cadastro
    feedbacksModels.cad(razao_social, feedback, function (erro, results) {
        if (erro) {
            console.error(erro);
            return res.status(500).render("feedbacks.ejs", {
                title: "Feedback",
                mensagem: "Erro ao cadastrar feedback",
                razao_social: []  // Passa uma lista vazia para o EJS em caso de erro
            });
        } else {
            console.log("Cadastro feito com sucesso !!!");

            // Redireciona para o método GET para garantir que a lista de empresas seja carregada novamente
            res.redirect('/feedbacks/indexfeedbacks?status=success');
        }
    });
}


