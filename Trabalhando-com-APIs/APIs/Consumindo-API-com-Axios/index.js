// Consumindo API com Axios

const express = require('express')

const axios = require('axios')

const app = express()

app.listen('3000')

// O express cria API, mas não tem um método de buscar informações em uma API, portanto, usaremos o AXIOS (npm i axios)

app.route('/').get( (req, res ) => {

    axios.get('https://api.github.com/users/isaberamos')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`)) // data é a resposta da URL e o send é para aparecer lá no Insonomia
    .catch(error => console.error(error))
})