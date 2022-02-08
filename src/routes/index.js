const { Router } = require('express');
const router = Router();

// Importo funciones
const {getUsers, createUser} = require('../controllers/index.controller')

// Ruta con método get, viene desde index.controller.js
router.get('/users', getUsers);

// Método Post
router.post('/users', createUser)

module.exports = router;