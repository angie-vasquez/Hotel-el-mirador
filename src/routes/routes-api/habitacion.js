const routes= require('express').Router()

const{agregarHabitacion, editarHabitacion, eliminarHabitacion} = require('../controllers/habitacionCtrl')

routes.route('/addHabitacion').post(agregarHabitacion)
routes.route('/editHabitacion').put(editarHabitacion)
routes.route('/deleteHabitacion').delete(eliminarHabitacion)
module.exports= routes