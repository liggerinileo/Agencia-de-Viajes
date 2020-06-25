const Sequelize = require('sequelize');

/* Primer parametro nombre BD, 2do usuario, 3ro contraseña y luego 
 las opciones de configuracion */
module.exports = new Sequelize('agenciadeviajes', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
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
