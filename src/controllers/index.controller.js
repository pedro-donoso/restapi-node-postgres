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
    //Formato de la respuesta, se puede definir estado diferente
    res.status(200).json(response.rows);
}

// Obtener usuario por ID
const getUserById = async (req, res) => {
    const id = req.params.id;
    // Consulta Postgresql
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
}

//createUser
const createUser = async (req, res) => {
    //Obtener datos del body
    const { name, email } = req.body;
    //Insertar nombre y correo en tabla users
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    console.log(response);
     //Mensaje de respuesta
    res.json({
        message: 'User Added Succesfully',
        body: {
            user: {name, email}
        }
    });
}

//Función deleteUser
const deleteUser = async (req, res) => {
    const id = req.params.id;
    // Consulta para eliminar dato por ID
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} deleted successfully`)
};

//Exporto función getUsers
module.exports = {
    getUsers,
    getUserById,
    createUser,
    deleteUser
}