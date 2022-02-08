// Requiero el Módulo Express
const express = require('express');
// Ejecuto el módulo Express y lo guardo en una constante App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes: App requiere archivo index
app.use(require('./routes/index'));

// App escucha en el Puerto 3000
app.listen(3000);
// Cuando escucha envia mensaje
console