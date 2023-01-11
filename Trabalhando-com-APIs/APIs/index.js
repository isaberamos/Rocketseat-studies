// Criando server

const express = require('express') // instalando o módulo do node server

const app = express() // inicializando a constante/express que está sendo guardado na constante app

app.listen('3000') // Criando o server. Este "ouve" o navegador, visto que quando entramos na porta 3000 ele vai jogar tudo o que queremos lá dentro. No começo aparecerá um "cannot get" até passarmos outras informações


/*          GET           */ 
/*app.route('/').get( (req, res) => res.send("hello")) // O route é uma função do express. Nesse caso, vai criar as rotas para a criação dos conteúdo através de uma rota. Por exemplo: /about (a barra é a URL base). O get é o método/verbo que, por sua vez, recebe req e res que devolve uma resposta para o navegador que é "hello"

app.route('/sobre').get( (req,res) => res.send("sobre mim"))
*/


/*          POST           */ 
/*
app.use(express.json()) // 2 . Passando pelo middleware para transformar tudo em json

app.route('/').post( (req,res) => console.log(req.body) ) // 1 . Mandando informações de fora para dentro da API. Tudo que é enviado no .post é recebido no req, e no res será o retorno. Nesse caso, queremos o corpo da requisição (.body). A princípio, ao rodar, o navegador não encontrará uma rota get ja que ele não consegue fazer o .post, ele só consegue fazer .get, portanto, usaremos o Insomnia para criar as rotas que o navegador não suporta por padrão. Depois de enviar um JSON, inicialmente, ele retornará um undefined porque quando recebemos algo na API precisamos falar pro nosso conteúdo que o que receberemos será um JSON, e esse processo se chama middleware, ou seja, a ponte entre as requisições. Então primeiro ele executará até -> app.route('/').post e depois passará pelo middle executando -> ( (req,res) => console.log(req.body) )

app.route('/').post( (req,res) => res.send(req.body) ) // O send é para ele enviar na resposta e dentro dos parâmetros pega o corpo da requisição com o req.body e enviar para o send*/


/*          PUT           */
/*
// middleware (também faz o trabalho inverso)
app.use(express.json())

let author = "Isabelle Ramousa"

app.route('/').get( (req,res) => res.send(author)) // Mostrar o conteúdo da variável "author". O primeiro get que der ele não vai alterar a informação, sendo necessário reiniciar o server e fazer um PUT e de novo um GET

app.route('/').put( (req,res) => {
    author = req.body.author // Recebendo a informação para alterar o que foi declarado anteriormente. Caso não tenha o .author ele devolverá toda a estrutura inicial do json ("isabelle ramousa")
    res.send(author) // O que for enviado na requisição vai substituir o que foi declarado inicialmente
} ) // Geralmente o PUT é usado para editar informações. Inicialmente ele não fará nada se enviar a requisição no Insonmia porque primeiro é necessário fazer o middleware (transformar em JSON)
*/


/*          DELETE           */

// Normalmente o delete recebe um ID ou nome para apagar conforme a informação recebida
let author = "Isabella"

// Geralmente o delete não recebe o ID pelo req.body, é pela URL
app.route('/:identificador').delete( (req, res) => {
    res.send(req.params.identificador) // Ao passar uma variável pela URL/rota chamamos de params
} )

/*app.route('/:identificador').delete( (req, res) => {
    res.send(req.params.identificador) // Ao passar uma variável pela URL/rota chamamos de params
} )*/

// Resumindo o processo: o Insomnia mandou a req para nosso código, o 0101 é armazenado na variável identificador, essa variável, por sua vez, ela vem dentro da requisição, dentro da requisição ela vem dentro do params e pôde ser pega pela .identificador 