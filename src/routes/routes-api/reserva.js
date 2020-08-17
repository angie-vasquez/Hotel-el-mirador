const routes= require('express').Router()

const{agregarReserva, editarReserva, eliminarReserva, changePago, SearhRoom} = require('../../controllers/reservaCtrl')

routes.route('/changePago').post(changePago)

routes.route('/addReserva').post(agregarReserva)
routes.route('/editReserva').post(editarReserva)
routes.route('/deleteReserva').delete(eliminarReserva)

routes.route('/buscarHabitacionDisponible').post(SearhRoom)

// routes.route('/getReserva')
module.exports= routes