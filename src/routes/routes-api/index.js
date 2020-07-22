//peticiones a la base de datos

'Use strict'

const route = require('express').Router()

route.get('/',(red,res) => {
      res.send({message: 'its working'})


})

// route.post('/login',(red,res)  => {
//     res.send({message: 'you have already logged!! '})

// })

module.exports = route

//formas de  declarar funciones

