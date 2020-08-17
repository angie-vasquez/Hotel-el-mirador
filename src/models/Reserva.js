'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Reserva = new Schema({

  Nro_documento: {
    type: Number,
    required: true
  },
  Nombre: {
    type: String,
    required: true
  },
  Apellidos: {
    type: String,
    required: true
  },
  Telefono: {
    type: Number,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  Fecha_ingreso: {
    type: Date,
    required: true

  },
  Fecha_salida: {
    type: Date,
    required: true
  },

  Numero_niños: {
    type: Number,
  },
  Numero_dultos: {
    type: Number,
  },
  id_Habitacion: {
    type: String,
    required: true
  },
  Costo_Alojamiento: {
    type: String,
    required: true
  },
  Estado: {
    type: Boolean,
    default: false
  },
  Nro_Habitacion: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Reserva', Reserva)