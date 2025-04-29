const express = require('express');

const router = express.Router();

const controllerConsulta = require('../controllers/consultaControllers');
router.get('/indexconsulta', controllerConsulta.consulta);
router.get('/consultafeed', controllerConsulta.consulta);

router.get("*", function (req, res) {
    
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})

module.exports = router
