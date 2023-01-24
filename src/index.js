const express = require('express')
const app = express()

app.use(express.json())

var Notas = [];

app.get('/',(req,res) => {
    res.send('<h1>Funcionando</h1>')
})

app.get('/notas',(req,res) => {
    res.json(Notas)
})
app.get('/notas/nota/:id',(req,res)=>{
    const id = Number(req.params.id)
    const Nota = Notas.find((Notas)=>{
    return (Notas.id === id)})
    res.json(Nota)
})

app.post('/notas/nota',(req,res)=>{
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
        content: a.content,
        descript: a.descript,
    }
    console.log(a)
    res.json(newNota)
    Notas = [...Notas,newNota]
    
})

const port = 3001
app.listen(port,() =>{
    console.log(`La pagina web se esta generando en el port ${port}`)
})