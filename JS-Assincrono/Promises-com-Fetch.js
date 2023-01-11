fetch('https://api.github.com/users/maykbrito')
.then( response => {
  response.json() // Segunda nova promessa pendente
  .then( data => { // Próximo passo de uma nova promessa
    fetch(data.repos_url) // Um novo fetch 
    .then( res => res.json() // Um novo then com uma nova resposta
    .then( d => console.log(d))) // Pega os novos repositórios
  })
})


fetch('https://api.github.com/users/maykbrito')
.then( response => response.json())
.then( data => fetch(data.repos_url)) // retornando uma nova promessa
.then( res => res.json())
.then( d => console.log(d))
.catch( err => console.log(err))

/* A fetch é uma função/estrutura de promessa que recebe uma URL para buscar/pegá-la.
O primeiro then é o próximo passo para pegar alguns dados.
Para pegar todos os dados, é preciso transformar todos os dados em um json. Fazendo isso, haverá uma nova promessa pendente. Já que é uma nova promessa, usa um novo then e pega os dados/nova resposta, dessa forma, pegará todos os dados.
Caso queira trabalhar com outras informações desses dados, por exemplo, o repos.url, terá que fazer um novo fetch e um novo then com uma nova resposta que será transformada em um json. Por fim, conseguirá pegar todos os repositórios.
Ainda sim, podemos fazer de uma forma mais enxuta, retornando somente o primeiro json, tirando o par de chaves e coloca o then ali, retornando somente o primeiro fetch, usando o poder da arrow, retornando uma nova promessa, retornando mais coisas, e assim por diante até encontrar todos os objetos. Esse é o poder do encadeamento de promessa.
Caso haja erro, é possível capturar independente da etapa em que ocorreu.
*/