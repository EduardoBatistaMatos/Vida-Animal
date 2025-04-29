const conexao = require('../config/conexao')

console.log("Acessando Models Criar Conta...")

module.exports = {
   cadastro,
}

function cadastro(razao_social , cnpj, cep, callback) {
    const m_sql = "INSERT INTO empresas (razao_social , cnpj, cep) VALUES (?, ?, ?)";
    conexao.query(m_sql, [razao_social, cnpj, cep], callback);
}






 