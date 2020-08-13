

const mongoose = require('mongoose')
const Schema= mongoose.Schema


const Tipohabitacion= new Schema({
     titulo:{type: String , require: true},
     descripcon:{type: String , require: true},
     imagenUrl:{type: String , require: true},
})


    module.exports= mongoose.model('Tipohabitacion',Tipohabitacion)