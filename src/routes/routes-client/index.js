'use strict'

const router= require('express').Router()
const TipoHabitacion = require('../../models/Tipohabitaciones')
const { getHabitacionTipo } = require('../../controllers/habitacionCtrl')
// const { getHabitacionTipo }  = require('../../controllers/habitacionCtrl')

const { isAuthenticated } = require('../../helpers/auth')
const { getAllReservas } = require('../../controllers/reservaCtrl')
// ESTA ES LA RUTA PROTEGIDA DEL ADMINISTRADOR 

router.get('/Administrador', isAuthenticated, (req,res) => {
    res.render('Layouts/outside/AdmiDashboard')
})

router.get('/Usuarios',isAuthenticated, (req,res)  => {

    res.render('Layouts/outside/Usuarios')
})

router.get('/ReservasAdmin',isAuthenticated, getAllReservas)
//  (req,res) => {
     
//     res.render('Layouts/outside/AdmiReserva')
// })








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
router.get('/Habitaciones',async(req,res) => {
     const tiposHabitaciones = await TipoHabitacion.find()
    //  console.log(`estos son los tipos de las habitaciones : ${tiposHabitaciones}`)
    res.render('Layouts/outside/habitaciones', {tiposHabitaciones})
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


// trae las habitaciones segun el tipo de habitacion 
router.post('/ListaHabitacion', getHabitacionTipo)




router.post('/ReservacionRegistro',(req,res) => {
    const { idHabitacion, precio, fecha_entrada, fecha_salida, Nro_Habitacion } = req.body
    const Igv =  precio * 0.18
    const Total  = parseInt(precio) + Igv
     console.log(`el id de la habitacion que voy a reservar : ${precio}`)
     
    res.render('Layouts/outside/ReservacionRegistro', {idHabitacion, precio, Igv, Total, fecha_entrada, fecha_salida, Nro_Habitacion})
})

router.get('/ConfirmacionReserva', (req, res) => {
    res.render('Layouts/outside/ConfirmacionReserva')
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

router.get('/Administrador/Mantenimiento/habitaciones',(req,res) => {
     
    res.send('Este es el r!!')
})
router.get('/Administrador/Mantenimiento/Clientes',(req,res) => {
     
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

router.get('/Administrador/Cerrar Sesión',(req,res) => {
     
    res.send('Este es el r!!')
})

module.exports=router