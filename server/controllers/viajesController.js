const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req, res) => {
    // Viaje.findAll()
    //     .then(viajes => res.render('viajes', {
    //         pagina: 'Proximos Viajes',
    //         viajes
    //     }))
    //     .catch(error => console.log(error))
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes
    });  
}

exports.mostrarViaje = async (req, res) => {
    // De esta forma puedes leer la url, o el id en el que te encuentras
    // Viaje.findByPk(req.params.id)
    //     .then(viaje => res.render('viaje', {
    //         viaje
    //     }))
    //     .catch(error => console.log(error))
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje', {
        viaje
    });
}