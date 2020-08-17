'use strict'


const express = require('express')
const port= (process.env.PORT || 8000)
const path  =require('path')
const handlebars = require('handlebars'); 
const exphbs = require('express-handlebars')
const session = require('express-session')
const passport = require('passport')

const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
//red= request,captura dato lo que el cliente te envía
//res= reponse,respuesta

//app.get('/',(req,res) =>  {
  //       console.log("server its funny!!!")
    //     res.send({message: 'ive already send something'})

//}
//
//Inicialización

const app = express()
require("./src/config/database/connection")
require('./src/helpers/passport')
//settings
app.set('port',port)
app.set('views', path.join(__dirname,'src/views'))


app.engine('.hbs', exphbs({

defaultLayout: 'main',
layoutsDir: path.join(app.get('views') ,'Layouts'),
partialsDir: path.join(app.get('views') ,'Partials'),
handlebars: allowInsecurePrototypeAccess(handlebars),
extname:'.hbs'

}))
app.set('view engine','.hbs')

//midleawares

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(session({
  secret: 'claveultrasecreta',
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

//global variables

app.use(express.static(path.join(__dirname, 'src/public')))
//routes cliente
app.use(require('./src/routes/routes-client/index'))
//rutas api
app.use(require('./src/routes/routes-api/login'))
app.use(require('./src/routes/routes-api/habitacion'))
app.use(require('./src/routes/routes-api/reserva'))
app.use(require('./src/routes/routes-api/trabajador'))
//server listening


app.listen(port , (err) => {
if(err){
    console.log("there was an error", err)
}
else {
    console.log("server runnig om port ", app.get('port'))
        
          }
})
