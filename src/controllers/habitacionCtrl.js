
const TipoHabitacion = require('../models/Tipohabitaciones')
const Habitacion = require('../models/Habitación')

async function getHabitaciones (req, res) {
    console.log("las habitaciones")
    const misHabitaciones = await Habitacion.find()
    res.json(misHabitaciones)
}


async function agregarHabitacion(req, res) {
    const { Caracteristicas, Id_Tipo, Nro_Habitacion, Precio, Nro_Piso, Estado, Tipo_Habitacion, urlImage } = req.body
    console.log(`los datos a agregar: ${Caracteristicas}`)
    const newHabitacion = new Habitacion({
        Caracteristicas,
        Id_Tipo,
        Nro_Habitacion,
        Precio,
        Nro_Piso,
        Estado,
        Tipo_Habitacion,
        urlImage
    })
    
    let result = await newHabitacion.save()

    const habitaciones = await Habitacion.find()
    res.render('Layouts/outside/AdmiHabitacion', {habitaciones})
}


//req.query => envia un solo dato
//req.body=> envia un objeto
//req.query => envia datos por url
//req.body=> envia archivos

function editarHabitacion(req, res) {
    const { params, body } = req
    console.log(`los datos: ${params}: ${body}`)

}
function eliminarHabitacion(req, res) {
    const { params } = req
    console.log(`el id para eliminar: ${params}`)
}
// async function getTipoHabitaciones(req, res) {
//     const tiposhabitaciones = await TipoHabitacion.find()
//     console.log(`id del tipo: ${params}`)
//     res.json(tiposhabitaciones)

// }
function getSelected(req, res) {
    const { } = req.body
    console.log(`agregando habitacion`)
}


async function getHabitacionTipo(req, res) {
    const { idTipoHabitacion } = req.body
    // console.log("lo que me esta llegando desde el cliente : ", idTipoHabitacion)
    const misHabitaciones = await Habitacion.find({Id_Tipo: idTipoHabitacion})
    // console.log(`lo que estoy recuperando!!! : ${misHabitaciones}`)
    res.render('Layouts/outside/ListaHabitacion', {misHabitaciones})
}



async function NuevoTipoHabitacion(req, res) {

    console.log('lo que esta llegando', req.body)

    const { titulo, descripcion, imagenUrl } = req.body
    const newTipoHabitacion = new TipoHabitacion({

        titulo,
        descripcion,
        imagenUrl
    })
   const resultado = await newTipoHabitacion.save()
   res.json(resultado)
}


module.exports = {
    agregarHabitacion,
    editarHabitacion,
    eliminarHabitacion,
    // getTipoHabitaciones,
    getHabitaciones,
    getSelected,
    getHabitacionTipo,
    NuevoTipoHabitacion
}