/* Alterando estilos
const elemento = document.querySelector('body')

elemento.style.backgroundColor = '#f9f3D2'

console.log(elemento.style.backgroundColor)
*/

const elemento = document.querySelector('body')

elemento.classList.add('active', 'green')
elemento.classList.remove('active')

// Verifica se já existe, caso não, ele adiciona
elemento.classList.toggle('active')
console.log(elemento.classList)