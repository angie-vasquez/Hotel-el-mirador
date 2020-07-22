
const mongoose = require('mongoose'),
         dataSecret = require('./dataSecret.json')

const uri = dataSecret.mongoDB.uri
const config = {
    user: process.env.DB_USER || dataSecret.mongoDB.user,
    pass: process.env.DB_PASS || dataSecret.mongoDB.pass,
    useNewUrlParser: true

}
const connection = mongoose.connect(uri,config,(err) => {
          if(err) {

          console.log(`there was an error: ${err}`)
          }
          else{

            console.log("base de datos conectada")
          }


})

