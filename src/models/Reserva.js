'use strict'


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reserva = new Schema({

          Id_Reserva:{                
              type:String,
               required: true
              },
          Fecha_ingreso:{
            type: Date,
            required: true                        

          },
          Fecha_salida:{
            type: Date,
            required: true  
          },
       
          Numero_niños:{
            type: Int,
            required: true             
        
          },
          Numero_dultos:{
            type: Int,
            required: true  
          },
          Tipo_Habitación:{
            type: String,
            required: true  

          },
          Costo_Alojamiento:{
            type: String,
            required: true  

          },
          Estado:{
            type: String,
            required: true  

          },
          Numero_noches:{
            type: String,
            required: true  

          },

})

module.exports= mongoose.model('Reserva',Reserva)