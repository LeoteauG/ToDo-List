const express = require('express')
const Router = express.Router()
const MD = express()
MD.use(express.json())
var Notas = [];


Router.get('/',(req,res) => {
        res.send('<h1>Funcionando</h1>')
    })

Router.get('/notas',(req,res) => {
        res.json(Notas)
    })

Router.get('/notas/nota/:id',(req,res)=>{
        const id = Number(req.params.id)
        const Nota = Notas.find((Notas)=>{
        return (Notas.id === id)})
        res.json(Nota)
    })
const Notapostear = (params) =>{
    Router.post('/notas/nota',(req,res)=>{
        const a = req.body
        var idMax
        if(Notas.length === 0)
        {
            idMax = 0;
        }
        else{
            const id = Notas.map(Note => Note.id)
            idMax = Math.max(...id)
        }
        
        const newNota = {
            id:  idMax + 1,
            content: params.titulo,
            descript: params.descrip,
        }
        res.json(newNota)
        Notas = [...Notas,newNota]
    })
}


Router.delete('/notas/nota/:id',(req,res) => {
        const id = Number(req.params.id)
        Notas = Notas.filter(Notas => Notas.id !== id)
        res.json(Notas)
    })

module.exports = Router
module.exports = Notapostear