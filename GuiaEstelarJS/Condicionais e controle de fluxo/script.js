/*Vamos falar sobre o if e o else, que ajudam nossa aplicação a tomar diferentes caminhos, ou seja, alteram o fluxo da nossa aplicação.

Sua sintaxe é simples, como pode ver a seguir:*/

/*if (condição) {
    //apenas será executado o bloco de código caso condição seja true
} else {
  // apenas será executado o bloco de código caso condição do if seja false
}
/*O exemplo utilizado pelo professor no vídeo é o seguinte, acompanhe para poder visualizar o processo até chegarmos nesse código.*/

let temperature = 36.9
let highTemperature = temperature >= 37.5 // recebe a condicional
let mediumTemperature = temperature < 37.5 && temperature >= 37 // recebe a condicional

/* 
if(temperature >= 37) {
    console.log('Febre alta')
} else if (temperature < 37.5 && temperature >= 37) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}
*/

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}

console.log('***********************************************')

/*Vamos usar uma declaração chamada switch, que tem um papel muito similar ao if e ao else if, vistos na aula passada, porém a estrutura é bem diferente, e aqui veremos essa estrutura.*/

let expression = 'b'

switch (expression) { // puxa a expressão para o switch
  case 'a': // confere se o valor da expressão é o correto
    console.log('a')
    break // para a execução do switch apenas se verdadeiro
  case 'b':
    console.log('b')
    break
  default: // caso nenhum valor seja o correto, realizará a 
					 //instrução dentro de si.
    console.log('default')
    break
}

console.log('***********************************************')

/*Temos também a calculadora que o professor construiu no vídeo:*/

function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2 
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2 
            break
        default:
            console.log('não implementado')
            break
    }

    return result
}

console.log(calculate(4, '+', 5))

console.log('***********************************************')


/*Nesta aula veremos sobre o throw e try/catch. São parte do controle de fluxo da aplicação.

Throw em inglês significa lançar, disparar, catch quer dizer pegar e try tentar.

Isso significa que vamos tentar executar um bloco de código, e se der algum erro, será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.*/

function sayMyName(name = '') {
    if (name === '') {
        throw new Error('Nome é obrigatório')
    }

    console.log(name)
}
/*Nesse caso, se o nome vier vazio, será disparada uma mensagem.

Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:*/

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')

/*O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.*/

console.log('***********************************************')

/*A estrutura de repetição for tem a seguinte sintaxe:

for(inicialização de uma variável; condição de continuação para o loop; expressão final)
break - para a execução do loop
continue - pula a execução do momennto
*/

for(let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i)
    if (i === 50) {
        break;
    }
}

console.log('***********************************************')

// O while é mais usado quando não sabemos o momento específico de parada

let i = 0
while(i < 10) {
    console.log(i)
    i++;
}

console.log('***********************************************')

// For...of (cria uma algo a partir de uma variável pré definida para pegar cada elemento)

let name = 'Ana'
let names = ['João', 'Paulo', 'Vitoria']

for(let name of names) {
    console.log(name)
}

console.log('***********************************************')

// For...in (cria um loop em cima de um objeto a partir de suas propriedades)

let person = {
    name: 'John',
    age: 30,
    weight: 88.9
}

for(let property in person) {
    console.log(property)
    console.log(person[property]) // é convertido em string e pega o valor da propriedade
    //console.log(person.name)
    //console.log(person["name"])
}

console.log('***********************************************')

