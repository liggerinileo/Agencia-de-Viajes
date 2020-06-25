const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');

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

    router.get('/viajes', (req, res) => {
        Viaje.findAll()
            .then(viajes => res.render('viajes', {
                pagina: 'Proximos Viajes',
                viajes
            }))
            .catch(error => console.log(error))
    });

    router.get('/viajes/:id', (req, res) => {
        // De esta forma puedes leer la url, o el id en el que te encuentras
        Viaje.findByPk(req.params.id)
            .then(viaje => res.render('viaje', {
                viaje
            }))
            .catch(error => console.log(error))
    });

    return router;
}