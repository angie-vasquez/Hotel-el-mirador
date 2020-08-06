'use strict'

const router= require('express').Router()


router.get('/',(req,res) => {
     
      res.render('Layouts/outside/home')

})

router.get('/Informacion',(req,res) => {
     
    res.render('layouts/outside/informacion');
})
router.get('/Login',(req,res) => {
     
    res.render('Layouts/outside/login')
})
router.get('/register',(req,res) => {
     
    res.render('Layouts/outside/register')
})
router.get('/Hotel',(req,res) => {
     
    res.render('Layouts/outside/Hotel')
})
router.get('/Habitaciones',(req,res) => {
     
    res.render('Layouts/outside/habitaciones')
})

router.get('/Gastronomia',(req,res) => {
     
    res.render('Layouts/outside/Gastronomia')
})
router.get('/LugaresTuristicos',(req,res) => {
     
    res.render('Layouts/outside/LugaresTuristicos')
})
router.get('/Reservaciones',(req,res) => {
     
    res.render('Layouts/outside/Reservaciones')
})
router.get('/Contactos',(req,res) => {
    
    res.render('Layouts/outside/Contacto')
})

router.get('/Login/Administrador',(req,res) => {
     
    res.send('Muestra la ventana del administrador')
})
router.get('/Administrador/dashboard',(req,res) => {
     
    res.send('Muestra habitaciones, clientes disponibles y reservaciones hechas')

})

router.get('/Administrador/Configuracion',(req,res) => {
     
    res.send('Este es el r!!')
})

router.get('/Administrador/perfil del hotel',(req,res) => {
     
    res.send('Este es el r!!')
})
router.get('/Administrador/habitaciones',(req,res) => {
     
    res.send('Este es el r!!')
})
router.get('/Administrador/Usuarios',(req,res) => {
     
    res.send('Este es el r!!')
})
router.get('/Administrador/Mantenimiento/habitaciones',(req,res) => {
     
    res.send('Este es el r!!')
})
router.get('//Administrador/Mantenimiento/Clientes',(req,res) => {
     
    res.send('Este es el r!!')
})
router.get('/Administrador/Caja/Asigación de cajas',(req,res) => {
     
    res.send('Este es el r!!')
})
router.get('/Administrador/Caja/Reporte de cajas',(req,res) => {
     
    res.send('Este es el r!!')
})
router.get('/Administrador/reservaciones/Nueva reservacion',(req,res) => {
     
    res.send('Este es el r!!')
})
router.get('/Administrador/reservaciones/reporte',(req,res) => {
     
    res.send('Este es el r!!')
})
router.get('/Administrador/Cerrar Sesión',(req,res) => {
     
    res.send('Este es el r!!')
})

module.exports=router