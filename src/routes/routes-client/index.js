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

router.get('/Administrador',(req,res) => {
    
    res.render('Layouts/outside/Administrador')
})
router.get('/ListaHabitacion',(req,res) => {
     
    res.render('Layouts/outside/ListaHabitacion')
})
router.get('/ReservacionRegistro',(req,res) => {
     
    res.render('Layouts/outside/ReservacionRegistro')
})

router.get('/AdmiDashboard',(req,res) => {
     res.render('Layouts/outside/AdmiDashboard')
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
router.get('/Usuarios',(req,res) => {

    res.render('Layouts/outside/Usuarios')
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