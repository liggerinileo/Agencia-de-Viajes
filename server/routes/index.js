const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');
const Testimonio = require('../models/Testimonios');

module.exports = function () {
    router.get('/', (req, res) => {
        const promises = [];
        promises.push(Viaje.findAll({
                limit: 3
        }))

        promises.push(Testimonio.findAll({
            limit: 3
        }))

        // Pasar el promise y ejecutarlo
        const resultado = Promise.all(promises);

        resultado.then(resultado => res.render('index', {
            pagina: 'Proximos Viajes',
            clase: 'home',
            viajes: resultado[0],
            testimonios: resultado[1]
        }))
        .catch(error => console.log(error))
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

    router.get('/testimonios', (req, res) => {
        Testimonio.findAll()
            .then(testimonios => res.render('testimonios', {
                pagina: 'Testimonios',
                testimonios
            }))
    });

    router.post('/testimonios', (req, res) => {
        // Validar que todos los campos esten llenos
        /* El req.body va a leer el name del form en el html y se utiliza el body-parser */
        let {nombre, correo, mensaje} = req.body;
        let errores = [];
        if (!nombre) {
            errores.push({'mensaje': 'Agrega tu Nombre'});
        }
        if (!correo) {
            errores.push({'mensaje': 'Agrega tu Correo'});
        }
        if (!mensaje) {
            errores.push({'mensaje': 'Agrega un Mensaje'});
        }

        // Revisar por errores
        if (errores.length > 0) {
            // Muestra la vista con errores
            res.render('testimonios', {
                errores,
                nombre,
                correo,
                mensaje
            });
        } else {
            // Almacenarlo en la BD
            Testimonio.create({
                nombre,
                correo,
                mensaje
            })
            .then(testimonio => res.redirect('/testimonios'))
            .catch(error => console.log(error)
            )
        }
        
    });

    return router;
}