const express = require('express')

const app = express()

app.listen('3000')

// middleware para identificar a estrutura JSON
app.use(express.json())

/*          BODY          */


app.route('/').post( (req, res) => {
    // Passando o req.body para a constante, que por sua vez, está desmenbrando o req.body e atribuindo o nome e a cidade como está no body
    const {nome, cidade} = req.body 
    res.send(`O nome é ${nome} e a cidade é ${cidade}`)
} )


/*          ROUTE PARAMS           */


// Não tem route params
app.route('/').get( (req, res) => res.send("oi"))

// Tem route params após a barra
app.route('/:variavel').get( (req, res) => res.send(req.params.variavel))

// Essa rota só é chamada após o / ter a palavra identidade e tudo depois da / vira uma variável
app.route('/identidade/:nome').get( (req, res) => res.send(req.params.nome))


/*          QUERY PARAMS           */

// É uma forma de mandar parâmetros na URL de acordo com os parâmetros da requisição. Para usar mais de uma variável, usar o &
app.route('/').get( (req, res) => res.send(req.query.cidade))
//localhost:3000?nome=isabella

app.route('/about/user').get( (req, res) => res.send(req.query.id)) // ID é a variável criada após o /user
// localhost:3000/about/user?id=4654564&nome=isabella&cidade=bombinhas