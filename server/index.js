// Importar Express
const express = require('express');
const path = require('path');
const routes = require('./routes');
const configs = require('./config');
const bodyParser = require('body-parser');


//const db = require('./config/database');
//db.authenticate()
//    .then(() => console.log('DB Conectada'))
//    .catch(error => console.log(error));

// Configurar Express
const app = express();

// Habilitar pug
// view engine es una configuracion de express
app.set('view engine', 'pug');

// Añadir las vistas
app.set('views', path.join(__dirname, './views'));

// Cargar una carpeta estatica llamada public
app.use(express.static('public'));

// Validar si estamos en desarrollo o produccion
/* env es una variable de node para detectar el ambiente (prod o desarr) */
const config = configs[app.get('env')]; 

// Creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

// Muestra el año actual y genera la ruta
app.use((req, res, next) => {
    // Crear una nueva fecha
    const fecha = new Date();
    // Creamos un nuevo objeto fechaActual
    res.locals.fechaActual = fecha.getFullYear();
    // req.path devuelve lo que este despues de la / en la url
    res.locals.ruta = req.path;
    // Para que siga ejecutando la proxima funcion
    return next();
})

//Ejecutamos el body-parser
app.use(bodyParser.urlencoded({extended: true}));

//Cargar las rutas
app.use('/', routes());

app.listen(3000);
