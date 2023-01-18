# Parâmetros

* São utilizados com o intuito de passar informações. Os parâmetros podem ser passados pelo body através dos verbos post, put e patch.

* Exemplo:

app.route('/').get( (req, res) => res.send(req.query.name))

app.route('/').put( (req, res) => res.send(req.body.author))

app.route('/:parametro').get( (req, res) => res.send(req.params.parametro))

* Mais exemplos:

localhost:3000/?name=ana
localhost:3000/ola%20alunos