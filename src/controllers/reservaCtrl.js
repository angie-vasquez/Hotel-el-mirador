
const Reserva = require('../models/Reserva')
const Habitacion = require('../models/Habitación')
const { sendEmail } = require('../helpers/sendEmail')

async function getAllReservas(req, res) {
    const misReservas = await Reserva.find()
    // const habitacion = await Habitacion.find()
    console.log(`mis reservas : ${misReservas}`)
    // for(var i = 0; i < misReservas.length; i++) {
    //     let habitacion = await Habitacion.find({_id : misReservas[i].id_Habitacion})
    //     console.log(`la habitacion que encontre : ${habitacion}`)
    // }

    res.render('Layouts/outside/AdmiReserva', { misReservas })
}

async function agregarReserva(req, res) {
    const { Nro_documento, Nombre, Apellidos, Telefono, correo, Fecha_ingreso, Fecha_salida, id_Habitacion,Nro_Habitacion, Costo_Alojamiento, Igv, precio } = req.body
    const Total = Igv + precio

    const errors = []
    if (!Nro_documento || !Nombre || !Apellidos || !Telefono || !correo || !Fecha_ingreso || !Fecha_salida) {
        errors.push({ text: 'Todos los campos deben ser llenados' })
    } if (Fecha_ingreso > Fecha_salida) {
        errors.push({ text: 'La fecha de ingreso no puede ser mayor que a la de salida' })
    }
    if (errors.length > 0) {
        res.render('Layouts/outside/ReservacionRegistro', { errors, Total, Igv, precio })
        
    }
    const newReserva = Reserva({
        Nro_documento,
        Nombre,
        Apellidos,
        Telefono,
        correo,
        Fecha_ingreso,
        Fecha_salida,
        id_Habitacion,
        Costo_Alojamiento,
        Nro_Habitacion
    })
    await newReserva.save()
    // const updated = await Habitacion.updateOne({ _id: id_Habitacion }, { $set: { Estado: false } })
    await sendEmail(correo)
    res.render('Layouts/outside/ConfirmacionReserva')
}

async function changePago(req, res) {
    var changeEstado = false
    let { id_reserva, estado } = req.body
    if (estado === true) {
        console.log(`el estado esta en verdadero ${estado}`)
        changeEstado = false
    } else {
        console.log(`el estado esta en falso ${estado}`)
        changeEstado = true
    }
    const update = await Reserva.updateOne({ _id: id_reserva }, { $set: { Estado: changeEstado } })
    const misReservas = await Reserva.find()
    res.render('Layouts/outside/AdmiReserva', { misReservas })
}




async function SearhRoom(req, res) {
    const { fecha_entrada, fecha_salida, nro_adultos, nro_menores } = req.body

    if (fecha_entrada > fecha_salida) {
        res.render('Layouts/outside/ListaHabitacion')
        return
    }
    const reservas = await Reserva.find()


    if (nro_menores == 1 && nro_adultos == 1) {
        var misHabitaciones = await Habitacion.find(
            {
                Tipo_Habitacion: { $in: ["Habitacion Suite", "Habitacion doble"] }
            }
        )

        Pristine:for (var i = 0; i < misHabitaciones.length; i++) {
            for(var j = 0; j < reservas.length; j++) {
                if(misHabitaciones[i]._id == reservas[j].id_Habitacion){
                    let starto = new Date(fecha_entrada)
                    let endo = new Date(fecha_salida)

                    if(starto >= reservas[j].Fecha_ingreso  && starto <= reservas[j].Fecha_salida || endo >= reservas[j].Fecha_ingreso  && endo <= reservas[j].Fecha_salida) {
                        await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: false } })
                    }else {
                        await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: true } })
                    }    
                }else{
                    await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: true } })
                }
            }
        }

        var porentr = await Habitacion.find(
            {
                Tipo_Habitacion: { $in: ["Habitacion Suite", "Habitacion doble"] }
            }
        )

        res.render('Layouts/outside/ListaHabitacion', { porentr, fecha_entrada, fecha_salida })
        return
    }
    if (nro_menores == 0 && nro_adultos == 1) {
        var misHabitaciones = await Habitacion.find(
            {
                Tipo_Habitacion: { $in: ["Habitacion Suite", "Habitacion Individual"] }
            }
        )

        Pristine:for (var i = 0; i < misHabitaciones.length; i++) {
            for(var j = 0; j < reservas.length; j++) {
                if(misHabitaciones[i]._id == reservas[j].id_Habitacion){
                    let starto = new Date(fecha_entrada)
                    let endo = new Date(fecha_salida)
                    if(starto >= reservas[j].Fecha_ingreso  && starto <= reservas[j].Fecha_salida || endo >= reservas[j].Fecha_ingreso  && endo <= reservas[j].Fecha_salida) {
                        await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: false } })
                    }else {
                        await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: true } })
                    }    
                }else{
                    await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: true } })
                }
            }
        }


        var porentr = await Habitacion.find(
            {
                Tipo_Habitacion: { $in: ["Habitacion Suite", "Habitacion Individual"] }
            }
        )

        res.render('Layouts/outside/ListaHabitacion', { porentr, fecha_entrada, fecha_salida })
        return
    }
    if (nro_menores == 0 && nro_adultos == 2) {
        var misHabitaciones = await Habitacion.find(
            {
                Tipo_Habitacion: { $in: ["Habitacion Suite", "Habitacion matrimonial", "Habitacion doble"] }
            }
        )
        
        Pristine:for (var i = 0; i < misHabitaciones.length; i++) {
            for(var j = 0; j < reservas.length; j++) {
                if(misHabitaciones[i]._id == reservas[j].id_Habitacion){
                    let starto = new Date(fecha_entrada)
                    let endo = new Date(fecha_salida)
                    if(starto >= reservas[j].Fecha_ingreso  && starto <= reservas[j].Fecha_salida || endo >= reservas[j].Fecha_ingreso  && endo <= reservas[j].Fecha_salida) {
                        await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: false } })
                    }else {
                        await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: true } })
                    }    
                }else{
                    await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: true } })
                }
            }
        }


        var porentr = await Habitacion.find(
            {
                Tipo_Habitacion: { $in: ["Habitacion Suite", "Habitacion matrimonial", "Habitacion doble"] }
            }
        )

        res.render('Layouts/outside/ListaHabitacion', { porentr, fecha_entrada, fecha_salida })
        return
    }
    if (nro_menores > 0 && nro_adultos > 0) {
        var misHabitaciones = await Habitacion.find(
            {
                Tipo_Habitacion: { $in: ["Habitacion Familiar"] }
            }
        )
        
        Pristine:for (var i = 0; i < misHabitaciones.length; i++) {
            for(var j = 0; j < reservas.length; j++) {
                if(misHabitaciones[i]._id == reservas[j].id_Habitacion){
                    let starto = new Date(fecha_entrada)
                    let endo = new Date(fecha_salida)
                    if(starto >= reservas[j].Fecha_ingreso  && starto <= reservas[j].Fecha_salida || endo >= reservas[j].Fecha_ingreso  && endo <= reservas[j].Fecha_salida) {
                        await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: false } })
                    }else {
                        await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: true } })
                    }    
                }else{
                    await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: true } })
                }
            }
        }


        var porentr = await Habitacion.find(
            {
                Tipo_Habitacion: { $in: ["Habitacion Familiar"] }
            }
        )

        res.render('Layouts/outside/ListaHabitacion', { porentr, fecha_entrada, fecha_salida })
        return
    }
    if (nro_menores == 0 && nro_adultos > 0) {
        var misHabitaciones = await Habitacion.find(
            {
                Tipo_Habitacion: { $in: ["Habitacion Familiar", "Habitacion doble", "Habitacion Suite"] }
            }
        )
        
        Pristine:for (var i = 0; i < misHabitaciones.length; i++) {
            for(var j = 0; j < reservas.length; j++) {
                if(misHabitaciones[i]._id == reservas[j].id_Habitacion){
                    let starto = new Date(fecha_entrada)
                    let endo = new Date(fecha_salida)
                    if(starto >= reservas[j].Fecha_ingreso  && starto <= reservas[j].Fecha_salida || endo >= reservas[j].Fecha_ingreso  && endo <= reservas[j].Fecha_salida) {
                        await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: false } })
                    }else {
                        await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: true } })
                    }    
                }else{
                    await Habitacion.updateOne({ _id: misHabitaciones[i]._id }, { $set: { Estado: true } })
                }
            }
        }


        var porentr = await Habitacion.find(
            {
                Tipo_Habitacion: { $in: ["Habitacion Familiar", "Habitacion doble", "Habitacion Suite"] }
            }
        )

        res.render('Layouts/outside/ListaHabitacion', { porentr, fecha_entrada, fecha_salida })
        return
    }
}

async function editarReserva(req, res) {
    const {_id} = req.body
    console.log(`el id de la reserva wey : ${_id}`)
    const update = await Reserva.updateOne({ _id: _id }, req.body)

    let misReservas = await Reserva.find()

    res.render('Layouts/outside/AdmiReserva', { misReservas })
    
}

function eliminarReserva(req, res) {


}
module.exports = {
    agregarReserva,
    editarReserva,
    eliminarReserva,
    getAllReservas,
    changePago,
    SearhRoom
}