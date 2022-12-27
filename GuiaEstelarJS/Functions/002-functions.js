/* Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses */

/* Function expression or anonymous */

// Parâmetros
 /*const sum = function(number1, number2) {
    console.log(number1 + number2)
}

// Argumentos da função
sum(2, 5) */


/* Retornando valores da função

Para passar valores de dentro da função para o resto do código, usa-se a palavra reservada return seguida do valor à ser retornado, parando assim a execução da função e mandando o valor para onde a função foi chamada. */

/* const sum2 = function(number1, number2) {
    var soma = number1 + number2 
    return soma
}

let number1 = 20
let number2 = 10
sum2(number1, number2)

console.log(`O number é ${number1}`)
console.log(`O number é ${number2}`)
console.log(`A soma é ${sum2(number1, number2)}`) // Sem o RETURN ele devolverá undefined

// console.log(soma) // Vai dar erro porque ainda que a var seja global, dentro da função ela ainda é local


// Outra forma de criar uma função
function juice(fruit1, fruit2) {
    return fruit1 + fruit2
}

const glass = juice('banana', 'apple')

console.log(glass)*/

/* ----------------------------------------------------------------------------------------------------------------*/

let subject = 'create view'

// Ao tirar o parâmetro, ele substituirá a variável subject por study, sobrescrevendo o subject do escopo anterior e vai retornar ele mesmo
function createThink(subject) {
    subject = 'study'
    return subject // E se não retornar, a função será undefined
}
 
console.log(subject) 
console.log(createThink(subject)) 
console.log(subject) // STUDY se não tiver parâmetro porque aí ele vai sobrescrever a variável subject porque ele vai buscar no escopo anterior, caso contrário, a subject continuará sendo create view, e ao executar a função a subject terá o valor declarado no escopo da função, ou seja, study
/*
-----------------------------------------------------------------------------------------------------------------------


let subject

// Ao tirar o parâmetro, ele substituirá a variável subject por study, sobrescrevendo o subject do escopo anterior e vai retornar ele mesmo
function createThink() {
    subject = 'study'
    return subject 
}
 
console.log(subject) // undefined
console.log(createThink()) // study
console.log(subject)  // study (subject atualizado fora)

---------------------------------------------------------------------------------

let subject

function createThink() {
    subject = 'study'
}
 
console.log(subject) // undefined
console.log(createThink()) undefined
console.log(subject)  // study (subject atualizado fora)


console.log('-----------------------------------------------------------') */


/*let subject0 = 'cachorro'

// Sem argumentos, ao executar a função, ele vai sobrescrever do escopo anterior // VERIFICAR ISSO QUE EU HAVIA ESCRITO>  ou seja, o subject que foi declarado fora da função
function createThink() {
    subject0 = 'gato'
    return subject0
}

console.log(subject0)
console.log(createThink(subject0)) // E se não passar nada de argumento e não retornar nada, a função retornará undefined
console.log(subject0) // Retorna o subject atualizado ali fora

console.log('-----------------------------------------------------------')


let subject1

function createThink(subject1) {
    subject1 = 'gato'
    return subject1
}

console.log(subject1)
console.log(createThink(subject1)) // E se não passar nada de argumento e não retornar nada, a função retornará undefined
console.log(subject1) // Retorna o subject atualizado ali fora, ou seja, undefined

console.log('-----------------------------------------------------------')
*/

/* Função Hoisting 
O JavaScript possui function hoisting, permitindo que uma função seja declarada depois de ser utilizada, pois faz algo similar a elevar no código declarações de funções. Porém isso não acontece dentro de variáveis (função anônima).
*/

/*
sayMyName() // Isabeula


//Essa função é statement (com os parâmetros específicos)
function sayMyName() {
    console.log('Isabeula')
}

const sayMyName = function() {
    console.log('Isabeula')
}


/* Arrow function
Também podemos escrever funções expression de uma maneira mais compacta, desta maneira: () => { código a ser executado }, chamada de Arrow Function.


const sayMyMiddleName = (name) => {
    console.log(name)
}

sayMyMiddleName('Ramousa')



function sayMyMiddleName(name) {
    console.log('antes de executar a função callback')

    name() // o name passa a ser uma função (callback)

    console.log('depois de executar')
}

//sayMyMiddleName({name: 'ana'})

sayMyMiddleName (
    () => {
        console.log('estou em uma callback. uma callback é uma função passada por parâmetro para outra função')
    }
)*/

/*Uma função callback é uma função passada a outra função como argumento, 
que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
*/
function sayMyMiddleName() {
    console.log('antes de executar a função callback')

    function name() {
        console.log('estou em uma callback.')
    }
    name()

    console.log('depois de executar')
}

sayMyMiddleName()