'use strict'


const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Client = new Schema ({


          DirecciónDomiciliaria:{
            type: String, 
            require: true 

          },

          email:{
                type:String,
                required: true
          },
         
          Ciudad:{
                 type: Date,
                 default: new Date()

          },
          Pais:{
            type: Date,
            default: new Date()

     }        

})

module.exports= mongoose.model('Client',Client)
