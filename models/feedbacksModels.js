const conexao = require('../config/conexao');
console.log("Acessando Models Criar Conta...");

module.exports = {
   cad,
   lista,
};

// Função para cadastrar o feedback
function cad(razao_social, feedback, callback) {
    const m_sql = "INSERT INTO feedback (razao_social, feedback) VALUES (?, ?)";
    conexao.query(m_sql, [razao_social, feedback], callback);
}

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

