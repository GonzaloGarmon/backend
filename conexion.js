const mongoose = require('mongoose');
mongoose.connect("mongodb://mongo:g4cfGDDGIuioy4xeApSp@containers-us-west-186.railway.app:6983");


const objetobd = mongoose.connection 

objetobd.on('connected', ()=>{console.log('conexion correcta a mongoDB')})
objetobd.on('error', ()=>{console.log('Error en la conexion a mongoDB')})

module.exports = mongoose