// Requiero Módulo pg
const { Pool } = require('pg');

//Conexión a Postgresql
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'password',
    database: 'firstapi',
    port: '5432'
});

//Consulta asíncrona a Postgresql
const getUsers = async (req, res) => {
    //Respuesta de la consulta
    const response = await pool.query('SELECT * FROM users');
    //Formato de la respuesta
    res.status(200).json(response.rows);
}

//createUser
const createUser = async (req, res) => {
    console.log(req.body);
    //Mensaje de respuesta
    res.send('user created');
}

//Exporto función getUsers
module.exports = {
    getUsers,
    createUser
}