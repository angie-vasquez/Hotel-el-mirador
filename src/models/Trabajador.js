'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const Trabajador = new Schema({
    usuario: {
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
    // persona :{ type: Schema.ObjectId,ref: "Persona"}
})

Trabajador.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = bcrypt.hash(password, salt)
    return hash
}

Trabajador.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('Trabajador', Trabajador)