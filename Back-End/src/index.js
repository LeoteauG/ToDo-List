const express = require('express')
const app = express()
const ruta = require('../Routers/routers')

app.use(ruta)


const port = 3001
app.listen(port,() =>{
    console.log(`La pagina web se esta generando en el port ${port}`)
})