const express = require('express');

const router = express.Router();

const controllerFeedbacks = require('../controllers/feedbacksControllers');
router.get('/indexfeedbacks', controllerFeedbacks.indexFeedbacks);
router.get('/lista', controllerFeedbacks.lista);
router.post('/cad', controllerFeedbacks.cad);



router.get("*", function (req, res) {
    
    res.send('<h3>Página Não Encontrada!</h3><p> Erro 404</p>')
})

module.exports = router
