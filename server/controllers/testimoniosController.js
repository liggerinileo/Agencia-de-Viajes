const Testimonio = require('../models/Testimonios');

exports.mostrarTestimonios = async (req, res) => {
    // Testimonio.findAll()
    //     .then(testimonios => res.render('testimonios', {
    //         pagina: 'Testimonios',
    //         testimonios
    //     }))
    const testimonios = await Testimonio.findAll()
    res.render('testimonios', {
        pagina: 'Testimonios',
        testimonios
    })
}

exports.agregarTestimonio = async (req, res) => {
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
        const testimonios = await Testimonio.findAll()
        res.render('testimonios', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimonios',
            testimonios
        })
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
    
}