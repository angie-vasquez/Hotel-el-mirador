const routes= require('express').Router()
const { isAuthenticated } = require('../../helpers/auth')
const{agregarReserva, editarReserva, eliminarReserva, SearhRoom} = require('../../controllers/reservaCtrl')

// routes.route('/changePago').post(changePago)

routes.route('/addReserva', ).post(agregarReserva)
routes.route('/editReserva', isAuthenticated).post(editarReserva)
routes.route('/deleteReserva', isAuthenticated).delete(eliminarReserva)

routes.route('/buscarHabitacionDisponible').post(SearhRoom)

// routes.route('/getReserva')
module.exports= routes