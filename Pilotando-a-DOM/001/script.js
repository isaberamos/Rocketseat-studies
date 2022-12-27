/*`É possível selecionar vários elementos de mesmo nome com a mesma classe, então criará um HTML Collection`
const element = document.getElementsByClassName('blog-title')
console.log(element)*/


/*Retorna um HTML Collection. Pega o elemento pela TAG*/
const tag = document.getElementsByTagName('meta')
console.log(tag)


/*Pega o elemento pelo seletor do CSS*/
const seletor = document.querySelectorAll('[src]')
console.log(seletor)


/*Pega o NodeList e só aqui é possível usar o forEach*/
const elements = document.querySelectorAll('#one')

elements.forEach(el => console.log(el))


/*Pega o elemento pelo textContent*/
const elemento = document.querySelector('h1')
elemento.textContent = " Ola"

console.log(elemento)

/*Troca o elemento*/
const elemento1 = document.querySelector('h1')
elemento1.innerText = " Ola"

console.log(elemento1)


/*Adiciona o HTML direto no elemento*/
const elemento2 = document.querySelector('h1')
elemento2.innnerHTML = " Ola <small>!!!</small>"

console.log(elemento2)


/*Adiciona o value*/
const elemento3 = document.querySelector('input')
elemento3.value = "Escreva aqui"

console.log(elemento3)


const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerID = document.querySelector('#header')

console.log(headerID.getAttribute('id'))
console.log(headerID.getAttribute('class'))

/* Remove o atributo*/
header.removeAttribute('id')
header.removeAttribute('class')

/*Adiciona uma classe */
header.setAttribute('class', 'bg header')

