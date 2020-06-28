const Viaje = require('../models/Viajes');
const Testimonio = require('../models/Testimonios');

exports.consultasHomepage = async (req, res) => {
    // const promises = [];
    // promises.push(Viaje.findAll({
    //         limit: 3
    // }))

    // promises.push(Testimonio.findAll({
    //     limit: 3
    // }))

    // // Pasar el promise y ejecutarlo
    // const resultado = Promise.all(promises);

    // resultado.then(resultado => res.render('index', {
    //     pagina: 'Proximos Viajes',
    //     clase: 'home',
    //     viajes: resultado[0],
    //     testimonios: resultado[1]
    // }))

    const viajes = await Viaje.findAll({ limit: 3 });
    const testimonios = await Testimonio.findAll({ limit: 3 });

    res.render('index', {
        pagina: 'Proximos Viajes',
        clase: 'home',
        viajes,
        testimonios
    })
}