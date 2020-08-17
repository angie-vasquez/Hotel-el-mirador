
const Trabajador = require('../models/Trabajador')

async function agregarTrabajador(req, res) {
    const { usuario, password, email } = req.body
    const newTrabajador = new Trabajador({
        usuario,
        password,
        email
    })
    newTrabajador.password = await newTrabajador.encryptPassword(password)
    await newTrabajador.save()
    res.json({ message: 'nuevo trabajador ingresado!!!' })
}

module.exports = {
    agregarTrabajador
}


// function obtenerReserva(req, res){


// }

// function buscarReserva(req,res){

// }

// function eliminarReserva(req,res){
// }
// function editarReserva(req,res){

// }
// function generarFactura(req,res){

// }
// module.exports={
// obtenerReserva,
// buscarReserva,
// eliminarReserva,
// editarReserva,
// generarFactura

// }