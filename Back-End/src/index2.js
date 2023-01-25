const nota = require('../Routers/routers')

const list = document.querySelector(".taskList")
const title = document.querySelector(".title")
const desc = document.querySelector(".desc")
const btn = document.querySelector(".btn")

btn.addEventListener("click",(e)=>{
    e.preventDefault
    alert("llego")
    const titulo = title.value
    const descrip = desc.value
    nota.Notapostear(titulo,descrip)
})

