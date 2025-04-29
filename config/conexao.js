const mysql = require("mysql2");

// Configuração da conexão
const database = "pi";
const conexao = mysql.createConnection({
    user: 'root',
    password: 'Jjs@1522',
    port: 3306
});

// Conectando ao banco de dados
conexao.connect((err) => {
    if (err) {
        console.log("Erro ao conectar no MySQL...");
        console.error(err);
        return;
    }

    conexao.query('USE ' + database, (err) => {
        if (err) {
            console.log("Erro ao selecionar o banco de dados...");
            console.error(err);
            return;
        }

        console.log("Conexão estabelecida com sucesso!");

        // Criar tabelas se elas não existirem
        criarTabelas();
    });
});

// Função para criar tabelas
function criarTabelas() {
    const queries = [
        `CREATE TABLE IF NOT EXISTS individuo (
            id_contas INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            idade INT NOT NULL,
            usuario VARCHAR(50) UNIQUE NOT NULL,
            senha VARCHAR(15) NOT NULL
        );`,
        `CREATE TABLE IF NOT EXISTS empresas (
            id_empresa INT AUTO_INCREMENT PRIMARY KEY,
            razao_social VARCHAR(255) UNIQUE NOT NULL,
            cnpj VARCHAR(14) NOT NULL UNIQUE,
            cep VARCHAR(10) NOT NULL
        );`,
        `CREATE TABLE IF NOT EXISTS feedback (
            id_feedback INT AUTO_INCREMENT PRIMARY KEY,
            razao_social VARCHAR(255) NOT NULL,
            feedback VARCHAR(1000) NOT NULL,
            FOREIGN KEY (razao_social) REFERENCES empresas(razao_social)
        );`
    ];

    // Executar cada query sequencialmente
    queries.forEach((query, index) => {
        conexao.query(query, (err) => {
            if (err) {
                console.log(`Erro ao criar a tabela ${index + 1}:`);
                console.error(err);
            } else {
                console.log(`Tabela ${index + 1} criada/verificada com sucesso.`);
            }
        });
    });
}

// Exportar conexão para reutilização em outros módulos
module.exports = conexao;
