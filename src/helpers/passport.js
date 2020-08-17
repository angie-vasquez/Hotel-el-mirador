'use strict'

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const Trabajador = require('../models/Trabajador')

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    const trabajador = await Trabajador.findOne({email: email})
    if(!trabajador) {
        return done(null, false, {message: 'Usuario no encontrado'})
    }else {
        const match = await trabajador.matchPassword(password)
        if(!match) {
            return done(null, trabajador)
        } else {
            return done(null, false, {message: 'password incorrecto'})
        }
    }
}))

passport.serializeUser((trabajador, done) => {
    done(null, trabajador.id)
})

passport.deserializeUser((id, done) => {
    Trabajador.findById(id, (err, user) => {
        done(err, user)
    })
})