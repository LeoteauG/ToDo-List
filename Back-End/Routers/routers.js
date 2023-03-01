const express = require('express')
const app = express()

let Notas = []

app.get('/', (req, res) => {
  res.send('<h1>Funcionando</h1>')
})

app.get('/notas', (req, res) => {
  res.json(Notas)
})

app.get('/notas/nota/:id', (req, res) => {
  const id = Number(req.params.id)
  const Nota = Notas.find((Notas) => {
    return (Notas.id === id)
  })
  res.json(Nota)
})

app.post('/notas/nota', express.urlencoded({ extended: false }), (req, res) => {
  const titulo = req.body.titulo
  const descrip = req.body.descrip
  let idMax
  if (Notas.length === 0) {
    idMax = 0
  } else {
    const id = Notas.map(Note => Note.id)
    idMax = Math.max(...id)
  }

  const newNota = {
    id: idMax + 1,
    content: titulo,
    descript: descrip
  }
  Notas = [...Notas, newNota]
  res.status(201)
})

app.delete('/notas/nota/:title', (req, res) => {
  const title = req.params.title
  Notas = Notas.filter(Notas => Notas.content !== title)
  res.json(Notas)
})

module.exports = app
