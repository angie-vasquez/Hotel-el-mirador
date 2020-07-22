
const routes= require('express').Router()

const{agregarTrabajador, editarTrabajador, eliminarTrabajador} = require('../../controllers/trabajadorCtrl')

routes.route('/addTrabajador').post(agregarTrabajador)
routes.route('/editTrabajador').put(editarTrabajador)
routes.route('/deleteTrabajador').delete(eliminarTrabajador)
module.exports= routes

//get devuelve datos
//post envia datos
//put edita 
// delete eliminar