// Enquanto uma promessa é executada outra também será executada ao mesmo tempo, tendo um agrupamento destas executando ao mesmo tempo e capturando um retorno. Isso utiliza o axios e por baixo dos panos o fetch()

import axios from "axios"

Promise.all([
  axios.get('https://api.github.com/users/isaberamos'), // Retorna uma promessa
  axios.get('https://api.github.com/users/isaberamos/repos') // Retorna outra promessa
])
.then( responses => {
  console.log(responses[0].data.login) // isaberamos
  console.log(responses[1].data.length) // 6
})
.catch( err => console.log(err.message))