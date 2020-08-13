const routes= require('express').Router()

const{agregarReserva, editarReserva, eliminarReserva} = require('../../controllers/reservaCtrl')

routes.route('/addReserva').post(agregarReserva)
routes.route('/editReserva').put(editarReserva)
routes.route('/deleteReserva').delete(eliminarReserva)

routes.route('/getReserva')
module.exports= routes