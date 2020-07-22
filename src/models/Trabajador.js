'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Trabajador= new Schema ({
    login: {
        type: String,
        requiere: true
    },
    password: {
        type: String,
        requiere: true
    },
    email: {
        type: String,
        requiere: true
    },
    persona :{ type: Schema.ObjectId,ref: "Persona"}
})

module.exports = mongoose.model ('trabajador', Trabajador)