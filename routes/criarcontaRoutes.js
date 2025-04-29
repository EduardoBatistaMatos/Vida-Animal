const express = require('express');

const router = express.Router();

const controllerCriarconta = require('../controllers/criarcontaControllers');
router.get('/indexcriarconta', controllerCriarconta.indexCriarconta);
router.post('/criarConta', controllerCriarconta.criarConta);

router.get("*", function (req, res) {
    
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})

module.exports = router
