/* Expressões e operadores

- Expressions
- Operators
    Binary -> (number + 1)
    Unary -> (++number) que é incremento ou decremento
    Ternary -> (true ? 'alo' : 'nada)
*/

let number = 1; // Se tirar o ; vai dar problema na função abaixo

(function () {
    console.log('alo')
})()

console.log(false ? 'alo' : 'nada')

console.log('***********************************************************')


/* new

    * left-hand-side expression
    * criar um novo objeto
*/

let name = new String('Ama')

name.surName = 'Ramousa'

let age = new Number(23)

console.log(name.surName, age)


let date = new Date('2020-12-01')
console.log(date.__proto__)

console.log('***********************************************************')

/* Operadores unários
    typeof
    delete
*/

console.log(typeof "mayk")

const person = {
    name : 'Joice',
    age: 17
}

console.log(person)

delete person.age

console.log(person)
console.log('***********************************************************')


/*Falaremos nessa aula sobre operadores aritméticos, que nos possibilitam fazer cálculos matemáticos.

O operador de multiplicação é o * (asterisco);

O operador de divisão é a / (barra);

O operador de soma é o + (positivo);

O operador de subtração é o - (negativo).

Outros operadores aritméticos incluem o resto de divisão, incremento, decremento e exponencial, com exemplos a seguir:


/* resto da divisão: sinal % */
let remainder
remainder = 11 % 9
//console.log(remainder) // 2

/* incremento: sinal ++ */
let increment = 0

//console.log(increment++) // 0 INCREMENTA APÓS
console.log(++increment) // 1
console.log(increment) // 1


/* decremento: sinal -- */
let decrement = 5
decrement-- // 4
console.log(decrement--) // ainda continua 4 porque está incrementando depois


/* exponencial: sinal ** */
console.log(2 ** 3)

console.log('***********************************************************')


/*Vamos falar sobre um operador que agrupa expressões, os parênteses.

Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro, e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento de alguns operadores, que moverá a precedência do cálculo.
*/

let tot = 2 + 3 * 5
console.log(tot)
//com essa precedência, nosso resultado é 17.

let total = (2 + 3) * 5
console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.

console.log('***********************************************************')

/*
Operadores de comparação igual a, diferente de, estritamente igual e estritamente diferente

diferente: !=
igual: ==
estritamente igual: === 
estritamente diferente: !==

Operadores de comparação maior e menor (igual)
maior ou igual >=
maior >
menor ou igual <=
menor <
*/

/*Veremos nesta aula sobre operadores de atribuição. Quando falamos em atribuição, queremos na verdade dizer assignment, que já vimos bastante, mas podemos também realizar diferentes tipos de atribuição, usando operadores aritméticos.

Exemplos:
*/

// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1

// addition assignment (adição):
x += 2

// subtraction assignment (subtração):
x -= 1

// multiplication assignment (multiplacação):
x *= 2

// division assignment (divisão):
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2

/* Operadores lógicos
AND &&
OR ||
NOT ! (troca o boolean dependendo da negação)
*/


/* Operador condicional ternário

condição ? valor1 : valor2

Exemplo de uso:
*/
// Café da manhã top
let pao = false
let queijo = true

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

console.log('***********************************************************')


/* Operadores para string

Temos também os string operators, os operadores de string, e nós até já vimos um desses antes, o comparison operator, ou ==, para os mais íntimos.

Agora vamos ver sobre a concatenação, que é o retorno da união de duas strings.

Seu símbolo é o de + (positivo), e seu uso é simples, algo próximo de:

*/

console.log('a' + 'a')
// nesse caso, o retorno da string seria aa.


/* Falsy e truthy
O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN


console.log( NaN ? 'verdadeiro' : 'falso' )
já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:
/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'falso' )

/* Precedência dos operadores

A ordem de importância de cada um deles.
// De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/

console.log(3 > 2 > 1)
console.log(true == 1)