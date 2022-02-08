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

//Consulta a Postgresql
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM users');
    console.log(response.rows);
    res.send('users');
}

//Exporto función getUsers
module.exports = {
    getUsers
}