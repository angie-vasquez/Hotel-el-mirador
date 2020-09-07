
const routes= require('express').Router()
const { isAuthenticated } = require('../../helpers/auth')
const { makeFactura,elimnarFactura} = require('../../controllers/facturaCtrl')

routes.route('/createFactura', isAuthenticated).post(makeFactura)

module.exports = routes