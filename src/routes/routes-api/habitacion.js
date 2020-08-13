const routes= require('express').Router()

const{agregarHabitacion, editarHabitacion, eliminarHabitacion,NuevoTipoHabitacion,getHabitacionTipo,getSelected,getTipoHabitaciones} = require('../../controllers/habitacionCtrl')

//Acciones del Administrador
routes.route('/addHabitacion').post(agregarHabitacion)
routes.route('/editHabitacion').put(editarHabitacion)
routes.route('/deleteHabitacion').delete(eliminarHabitacion)

//Acciones del cliente
//los tipos de habitaciones 
routes.route('/getTipoHabitacion').get(getTipoHabitaciones)

//trae habitaciones que estamos filtrando segun la peticion
routes.route('/getSelected').post(getSelected)
//trae habitaciones segun el tipo requerido
routes.route('/getHabitacionTipo/id:').get(getHabitacionTipo)

//crear un post
routes.route('/NuevoTipoHabitacion').post(NuevoTipoHabitacion)

module.exports= routes