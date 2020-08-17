'use strict'
const routes= require('express').Router()
const passport = require('passport')

const{agregarTrabajador} = require('../../controllers/trabajadorCtrl')

routes.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

routes.route('/addTrabajador').post(agregarTrabajador)
// routes.route('/editTrabajador').put(editarTrabajador)
// routes.route('/deleteTrabajador').delete(eliminarTrabajador)
routes.post('/signin', passport.authenticate('local', {
    successRedirect: '/Administrador',
    failureRedirect: '/login',
}))

module.exports= routes

//get devuelve datos
//post envia datos
//put edita 
// delete eliminar