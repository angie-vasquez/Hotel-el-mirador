'use strict'


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Habitacion = new Schema({
        
        Caracteristicas:{
                type: String, 
                require: true 
        },
        Id_Tipo:{
                type: String, 
                require: true 
        },
        Nro_Habitacion:{
                type: Number, 
                require: true 
        },
        Precio:{
                type: String, 
                require: true 
        },
        Nro_Piso:{
                type: Number, 
                require: true 
        },
        Estado:{
                type: Boolean, 
                require: true 
        },
        Tipo_Habitacion:{
                type: String, 
                require: true 
        },
})

module.exports= mongoose.model('Habitacion',Habitacion)