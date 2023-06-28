const { error } = require('console')
const express = require('express')
const router = express.Router()

const mongoose = require ('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema ({
    nombre: String,
    apellido: String,
    email: String,
    comentario: String,
    idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios',eschemausuario)
module.exports = router

// router.get('ejemplo', (req,res) =>{
//     res.end('saludo carga desde ruta ejemplo')
// })

router.post('/agregarusuario', (req,res) => {
    const nuevousuario = new ModeloUsuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        comentario: req.body.comentario,
        idusuario: req.body.idusuario
    })
    nuevousuario.save().then((err) => {
        if(!err){
            res.send("Datos del usuario")
        }else{
            res.send(err)
        }
    })
    
})


router.get('/obtenerusuarios', (req, res) => {
    ModeloUsuario.find().then((docs,err) =>{
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

router.post('/obtenerdatausuario', (req, res) => {
    ModeloUsuario.find({idusuario:req.body.idusuario}).then((docs,err) =>{
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

//Actualizar Usuario
router.post('/actualizausuario', (req,res) => {
    ModeloUsuario.findOneAndUpdate({idusuario:req.body.idusuario}, {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        comentario: req.body.comentario,
        
    }).then((err,docs) =>{
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})




//Borrar Usuario

router.post('/borrarusuario', (req,res) => {
    ModeloUsuario.findOneAndDelete({idusuario:req.body.idusuario}).then((err,docs) => {
            if(!err){
                res.send(docs)
            }else{
                res.send(err)
            }
    })
})
