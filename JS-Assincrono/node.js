/* Nesta aula vamos verificar se estamos entendendo como que funciona o callback e o assincronismo no JavaScript.*/


const https = require('https')
const API = 'https://jsonplaceholder.typicode.com/users?_limit=2'

https.get(API, res => {
	console.log(res.statusCode)
})

console.log('conectando a API')