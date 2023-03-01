const btn = document.querySelector('.btn')
const lista = document.querySelector('.taskList')
const title = document.querySelector('#titulo')
const descripcion = document.querySelector('#descrip')
const mostraNotas = async () => {
  const datos = await fetch('http://localhost:3001/notas')
  const data = await datos.json()

  data.forEach(data => {
    lista.innerHTML += `
    <li class="bg-blue-100 w-3/4 m-auto border-black border-solid border-2 rounded-md p-2">
      <div class="grid grid-cols-2 ">
      <section class=" ml-5 w-3/4">
          <h1>${data.content}</h1>
          <p>${data.descript}</p>
      </section>
      <button class="btnDelete pt-1 pb-1 p-2 w-1/4 rounded-md border-solid border-black border-2 self-center hover justify-self-end bg-yellow-400">Modificar</button>
      </div>
    </li>
    `
  })
}

btn.addEventListener('click', async (e) => {
  e.preventDefault()
  const titulo = document.querySelector('.title').value
  const descrip = document.querySelector('.desc').value
  const OPTIONS = {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ titulo, descrip }),
    mode: 'cors'
  }
  fetch('http://localhost:3001/notas/nota/', OPTIONS)
    .then(res => console.log(res.ok))
    .catch(e => { console.log(e) })
  lista.textContent = ''
  mostraNotas()
  title.value = ''
  descripcion.value = ''
})

mostraNotas()
const btnDelete = document.querySelector('.btnDelete')

btnDelete.addEventListener('click', async () => {
  const title = document.querySelector('.titleDelete').value
  console.log(title)
  await fetch(`http://localhost:3001/notas/nota/${title}`, {
    method: 'delete',
    mode: 'cors'
  })
  lista.textContent = ''
  mostraNotas()
})

/*
const li = document.createElement('li')
    li.className = 'bg-blue-100 w-3/4 m-auto border-black border-solid border-2 rounded-md p-2'
    const div = document.createElement('div')
    div.className = 'grid grid-cols-2'
    const section = document.createElement('section')
    section.className = 'ml-5 w-3/4'
    const h1 = document.createElement('h1')
    h1.textContent = data.content
    const p = document.createElement('p')
    p.textContent = data.descript
    btnDelete = document.createElement('button')

    btnDelete.className = 'btnDelete pt-1 pb-1 p-2 w-1/4 rounded-md border-solid border-black border-2 self-center hover justify-self-end bg-red-600'
    btnDelete.textContent = 'Eliminar'
    section.append(h1, p)
    div.append(section, btnDelete)
    li.appendChild(div)
    lista.append(li)
    btnDelete.onclick = eliminarNota
 */

/*

  console.log(notas)
*/
