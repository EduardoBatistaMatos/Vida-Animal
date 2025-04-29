const conexao= require('../config/conexao');  // Certifique-se de que a conexão com o banco está correta

module.exports = {
    consulta,
};

// Função que executa a consulta ao banco
function consulta(callback){
    conexao.query("SELECT razao_social, feedback FROM feedback", callback)
}



