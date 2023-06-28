const express = require ('express')
const app = express()
const archivoBD = require('./conexion')
const rutausuario = require('./rutas/usuario')
const cors = require('cors')
//Importar body parser
const bodyParser = require ('body-parser')
const conn = require('express-myconnection')


const PORT = process.env.PORT || 5001


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))
app.use('/api/usuario', rutausuario)


app.get('/', (req,res) =>{
    res.end('bienvenidos al sv backend')
})

app.listen(PORT, () => {
    console.log(`Tu server esta listo en el puerto ${PORT}`)
})


