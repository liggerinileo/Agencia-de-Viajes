// Importar Express
const express = require('express');
const path = require('path');
const routes = require('./routes');

// Configurar Express
const app = express();

// Habilitar pug
// view engine es una configuracion de express
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta estatica llamada public
app.use(express.static('public'));

//Cargar las rutas
app.use('/', routes());

app.listen(3000);
