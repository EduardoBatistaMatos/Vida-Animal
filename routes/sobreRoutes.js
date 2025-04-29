const express = require('express');

const router = express.Router();

const controllerSobre = require('../controllers/sobreControllers');
router.get('/indexsobre', controllerSobre.indexSobre);

module.exports= router

router.get("*", function (req, res) {
    
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})

module.exports = router
