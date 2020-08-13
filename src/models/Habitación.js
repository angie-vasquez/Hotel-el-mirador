'use strict'


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Habitacion = new Schema({
        
        Id_habitación:{
                type: String, 
                require: true 
        },
        Características:{
                type: String, 
                require: true 
        },
        Tipo_Habitacion:{
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
                type: Int, 
                require: true 
        }
})
module.exports= mongoose.model('Habitacion',Habitacion)