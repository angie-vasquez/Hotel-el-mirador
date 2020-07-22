'use strict'

const routes = require('express').Router()

const { registerUser, loginUser} = require('../../controllers/loginCtrl')

routes.post('/login', loginUser)
routes.post('/register', registerUser)

module.exports = routes
