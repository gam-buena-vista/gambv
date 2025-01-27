-- Crear la base de datos
CREATE DATABASE leyes_db;

-- Usar la base de datos
USE leyes_db;

-- Crear la tabla para almacenar la información de las leyes
CREATE TABLE leyes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    publicacion DATE NOT NULL,
    descripcion TEXT NOT NULL,
    archivo_pdf VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);