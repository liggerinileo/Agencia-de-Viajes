const express = require('express');
const router = express.Router();

module.exports = function () {
    router.get('/', (req, res) => {
        res.render('index');
    });
    
    router.get('/nosotros', (req, res) => {
        res.render('nosotros', {
            /* Es una variable que le vamos a pasar a 'nosotros',
             y solo va a estar disponible en este template */
            pagina: 'Sobre Nosotros'
        });
    });

    return router;
}