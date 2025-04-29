const express = require('express');

const router = express.Router();

const controllerLogin = require('../controllers/loginControllers');

router.get('/', controllerLogin.login);
router.post('/login', controllerLogin.validarPSW);

module.exports = router

