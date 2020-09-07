'use strict'

const Reserva = require('../models/Reserva')
const Habitacion = require('../models/Habitación')
const { create_pdf } = require('../helpers/createpdf')

async function makeFactura (req, res) {
    let { id_reserva, estado } = req.body

    const miReserva = await Reserva.find({_id: id_reserva})
    const miHabitacion = await Habitacion.find({_id: miReserva[0].id_Habitacion})
    console.log(`las habitacion : ${miHabitacion}`)
    console.log(`la reservaaaaa : ${miReserva}`)
    
    var resultado = await create_pdf(miReserva, miHabitacion)

    console.log(`lo crearemos : ${resultado}`)

    console.log(`pdf creado`)
    var changeEstado = false

    if (estado === true) {
        console.log(`el estado esta en verdadero ${estado}`)
        changeEstado = false
    } else {
        console.log(`el estado esta en falso ${estado}`)
        changeEstado = true
    }
    const update = await Reserva.updateOne({ _id: id_reserva }, { $set: { Estado: changeEstado } })
    const misReservas = await Reserva.find()
    let ruta = `http://localhost:8000/files/${id_reserva}.pdf`
    
    res.redirect(ruta)
    // res.render('Layouts/outside/AdmiReserva', { misReservas,  })
}

module.exports = {
    makeFactura
}