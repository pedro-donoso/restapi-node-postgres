const { Router } = require('express');
const router = Router();

// Importo funciones
const { getUsers, createUser, getUserById } = require('../controllers/index.controller')

// Ruta con método get, viene desde index.controller.js
router.get('/users', getUsers);

// Ruta para obtener usuario or ID
router.get('/users/:id', getUserById);

// Método Post
router.post('/users', createUser)

module.exports = router;