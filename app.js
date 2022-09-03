const express = require("express");
const app = express();
const path = require("path")
const mainRouter = require("./src/routes/routerIndex")

// Me permite acceder al css, javascript(front), imagenes, etc.
app.use(express.static(path.join(__dirname, './public'))); // Necesario para los archivos estáticos en el folder /public

// Motor de plantilla que voy a utilizar: EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // Define la ubicación de la carpeta de las Vistas

// En que puerto levanto
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})

// Rutas principales
app.use("/", mainRouter); 