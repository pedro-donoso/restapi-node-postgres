-- Consulta Postgresql
CREATE DATABASE firstapi;

-- Crear Tabla de Usuarios
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

-- Insertar Datos
INSERT INTO users (name, email) VALUES
('joe', 'joe@ibm.com'),
('ryan', 'ryan@faztweb.com');