const conexao = require('../config/conexao')

console.log("Acessando Models Login...")

module.exports = {
   validarPSW
}


function validarPSW(usuario, senha, callback) {
    const m_sql = "SELECT * FROM individuo WHERE usuario = '"+ usuario + "' AND  senha = '"+ senha +"'";
    conexao.query(m_sql, [usuario, senha], callback);
}


 