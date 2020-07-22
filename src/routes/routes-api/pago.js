const routes= require('express').Router()

const {agregarPago,eliminarPago}= require('../../controllers/pagoCtrl')

routes.route('/addPago').post(agregarPago)

routes.route('/deletePago').post(eliminarPago)

module.exports=routes