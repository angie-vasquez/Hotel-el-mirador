
const TipoHabitacion = require('../models/Tipohabitaciones')


function agregarHabitacion(req, res) {
    const { } = req.body
    console.log(`los datos a agregar: ${body}`)

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
async function getTipoHabitaciones(req, res) {
    const tiposhabitaciones = await TipoHabitacion.find()
    console.log(`id del tipo: ${params}`)
    res.json(tiposhabitaciones)

}
function getSelected(req, res) {
    const { } = req.body
    console.log(`agregando habitacion`)
}
function getHabitacionTipo(req, res) {
    const { id } = req.params
    console.log(`agregando habitacion`)
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
    getTipoHabitaciones,
    getSelected,
    getHabitacionTipo,
    NuevoTipoHabitacion
}