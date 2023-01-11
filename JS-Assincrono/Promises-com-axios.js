import axios from "axios";

axios
  .get('https://api.github.com/users/isaberamos')
  .then(response => {
    const user = response.data // Pega a resposta de dados do usuário isaberamos

    axios.get(user.repos_url) // AQUI AINDA É UMA PROMESSA PENDENTE. Pega somente o repos_url, ou seja, todos os repositórios que existem em isaberamos
    .then( anotherRespo => console.log(anotherRespo.data) ) // Faz um novo then para tirar a pendência da promessa
  })
  .catch( error => console.log(error)) // Captura o erro


// Para não precisar fazer vários axios.get podemos simplificar conforme a linha:
axios
  .get('https://api.github.com/users/isaberamos')
  .then(response => {
    const user = response.data

    return axios.get(user.repos_url)
    
  })
  .then(repos => console.log(repos.data))
  .catch( error => console.log(error))


// Simplificando ainda mais:
axios
.get('https://api.github.com/users/isaberamos')
.then(response => axios.get(response.data.repos_url))
.then(repos => console.log(repos.data))
.catch( error => console.log(error))