// Requiero el Módulo Express
const express = require('express');
// Ejecuto el módulo Express y lo guardo en una constante App
const app = express();

// Middlewares
// Formato para enviar datos en formato json POST
app.use(express.json());
// Método para entender elementos de texto de un formulario
app.use(express.urlencoded({extended: false}));

// Routes: App requiere archivo index
app.use(require('./routes/index'));

// App escucha en el Puerto 3000
app.listen(3000);

// Cuando escucha envia mensaje
console.log('Server on port 3000');