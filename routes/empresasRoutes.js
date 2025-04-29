const express = require('express');

const router = express.Router();

const controllerEmpresas = require('../controllers/empresasControllers');
router.get('/indexemp', controllerEmpresas.indexEmpresas);
router.post('/cadastro', controllerEmpresas.cadastro);

console.log("Rotas de Empresas")

router.get("*", function (req, res) {
    
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})

module.exports = router
