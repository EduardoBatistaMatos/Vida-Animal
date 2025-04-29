
module.exports = {
    index,
    indexLogin,
    indexNotFound,   

}

function index(req, res) {
    console.log('Rota Raiz Encontrada!!!');
    res.send('<h3> Rota Raiz Encontrada! <br> Meu nome é: Claudio de Melo Junior <br> RA 1091392413053 <br> Avaliação Web II - Backend </h3>');
}
function indexLogin(req, res) {
    res.render('login.ejs', {
        title:"Login",
        mensagem: "Senha do usuário"
    })
}

function indexNotFound(req, res) {
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
}