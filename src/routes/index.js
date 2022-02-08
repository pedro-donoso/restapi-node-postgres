const { Router } = require('express');
const router = Router();

// Importo función getUsers
const {getUsers} = require('../controllers/index.controller')

// Ruta con método get, viene desde index.controller.js
router.get('/users', getUsers);

module.exports = router;