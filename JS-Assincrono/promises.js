/*
O que é uma promessa no JavaScript?

Como criar uma promessa?

Como aguardar uma promessa ser finalizada?

Quais os quatro estágios do ciclo de vida de uma Promise?

O que são os métodos then, catch, finally da promessa?

o que é a fetch API do navegador e como utilizar?

O que é a biblioteca Axios e como utilizar?

Vamos aprender a executar mais de uma Promise ao mesmo tempo com o método .all()

Vamos usar a plataforma https://codesandbox.io/ para exemplificar nossos códigos no browser.

E o NodeJS para testar os códigos na máquina local.
*/


/* É um objeto JavaScript com a promessa de que algo será realizado
É usado para operações assíncronas
Não bloqueia outras operações
Essa promessa não significa que vai dar certo ou que vai dar errado.
Exemplo:

Carregar um arquivo
Leitura de dados de uma API
Uma promessa poderá ser:

Pending: Estado inicial, assim que o objeto da promessa é iniciado
Fulfilled: A promessa foi concluída com sucesso
Rejected: A promessa foi rejeitada, houve um erro
Settled: Seja com sucesso ou erro, ela foi finalmente concluída
*/


// Promessa retorna com sucesso
/*console.log('pedir uber') 
const promessa = new Promise((resolve, reject) => {
	return resolve('carro chegou')
})

console.log('aguardando')

promessa.then(result => console.log(result))
*/
//Promessa é rejeitada e usamos o catch() para capturar o erro
console.log('pedir uber') 
const promessa = new Promise((resolve, reject) => {
	return resolve('pedido aceito!')
})

console.log('aguardando')

promessa
	.then(result => console.log(result))
	//.catch(erro => console.log(erro))
/*let aceitar = true

console.log('pedir uber') 

const promessa = new Promise((resolve, reject) => {
	if (aceitar) {
		return resolve('pedido aceito!')
	}

	return reject('pedido negado!')
})

console.log('aguardando')

promessa
	.then(result => console.log(result))
	.catch(erro => console.log(erro))
	.finally(() => console.log('finalizada'))*/