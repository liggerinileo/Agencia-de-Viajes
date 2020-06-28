const Sequelize = require('sequelize');
require('dotenv').config({ path: 'variables.env' })


/* Primer parametro nombre BD, 2do usuario, 3ro contraseña y luego 
 las opciones de configuracion */
module.exports = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    // dialect: que BD vas a conectar
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});


