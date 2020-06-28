exports.infoNosotros = (req, res) => {
    res.render('nosotros', {
        /* Es una variable que le vamos a pasar a 'nosotros',
         y solo va a estar disponible en este template */
        pagina: 'Sobre Nosotros'
    });
}