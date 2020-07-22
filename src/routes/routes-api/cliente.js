
const routes= require('express').Router()

const{agregarCliente, editarCliente, eliminarCliente} = require('../../controllers/clienteCtrl')

routes.route('/addCliente').post(agregarCliente)
routes.route('/editCliente').put(editarCliente)
routes.route('/deleteCliente').delete(eliminarCliente)
module.exports= routes