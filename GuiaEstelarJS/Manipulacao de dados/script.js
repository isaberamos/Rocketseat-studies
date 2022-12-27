/* 
    * Prototype: O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos. Esses objetos/tipos de dados, por sua vez, são encapsulados por objetos, herdando a cadeia de protótipos

    * prototype-based language
    * prototype chain
    * __proto__
*/


/* Type conversion se trata de uma conversão de tipo feita pelo dev, explicitamente, e pode ser feita de diversas maneiras, por exemplo com o método Number(), já type coersion é uma mudança de tipos feita pelo próprio JavaScript, implicitamente, por exemplo quando você tenta somar um número na forma string com um número do tipo número. Exemplo: 
console.log(Number('9') + 5)
*/


/* É possível transformar números em formato de string através do método Number() e números em formato number em string usando o método String(). Por exemplo:
let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))
*/


/* Para contar a quantidade de caracteres em uma string é possível usar o método length(), também é possível contar a quantidade de algarismos em um número transformando o número em string e usando o mesmo método. Exemplo:
let number = 1234
console.log(String(number).lenght) > 4

Para determinar uma quantia de casas decimais de um número pode-se usar o método toFixed() colocando como argumento quantas casas decimais o número terá. Para mudar a formatação do número de separado por ponto para separado por vírgula é possível usar o método replace(".", ","). O resultado final será do tipo string, e a conversão para o tipo número não será possível por que a vírgula não é considerada parte de um número.

Quando uma função é atrelada a um objeto é chamada de método

let number = 546.6546646
console.log(number.toFixed(2).replace(".", ",")) > 546,65
*/


/* Para separar um texto por espaços, pode-se usar o método split(" "), que transforma o texto em um array de strings baseado no argumento, que no caso são os espaços. Para juntar esse array é possível usar o método join('"), que juntaria essas palavras sem nenhum separador, porém colocando um argumento, no caso um underscore ( join("_") ) as palavras são juntadas com o argumento de separador.

let phrase = "Eu quero viver o amor"
let myArray = phrase.split(" ")
console.log(myArray.join("_").toUpperCase()) -> EU_QUERO_VIVER_O_AMOR

*/

/* Para verificar se um texto possui uma palavra específica, podemos usar o método includes(), passando como argumento a palavra a ser verificada, que retorna um valor true se encontrar a palavra, e falso se não, lembrando sempre que o método é case sensitive.

let phrase = "Eu quero viver o amor"
console.log(phrase.includes("amor")) -> true

Array com construtor:

//let myArray = new Array(10)
let myArray = new Array('a', 'b')
console.log(myArray)

console.log(["a", {type: "array"}, function() {return "alô"},][2]()) // Aqui acessa o elemento do array com [2] e chama a função com ()

 
*/

/* Para transformar uma string em um array, pode-se usar o objeto Array com o método from(), passando como argumento a string a ser transformada em array. Por exemplo console.log(Array.from("developer").

let word = "manipulação"
console.log(Array.from(word)) -> (11) ['m', 'a', 'n', 'i', 'p', 'u', 'l', 'a', 'ç', 'ã', 'o']

O from espera uma string como argumento
*/

/* Existem várias maneiras de manipular arrays, como: o método push(), que adiciona um elemento no final do array, o método unshift(), que adiciona um elemento no começo do array, o método pop(), que retira um elemento do final do array, o método shift(), que retira um elemento do começo do array, o método slice(), que recebe como argumentos a posição de início e a posição do fim da parte que você quer selecionar, e retorna os valores destas posições, o método splice(), que recebe como argumentos a posição de início e a quantidade de elementos que você quer remover e, o método indexOff(), que encontra o index do valor que recebe como argumento em um array.
*/

let techs = ["html", "css", "js"]
// adicionar um item no fim
techs.push("node.js")
// adicionar no começo
techs.unshift("sql")
// remover do fim
//techs.pop()
// remover do começo
//techs.shift()
// pegar somente do começo
//console.log(techs.slice(1,3))
// pegar somente alguns elementos do array
// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 1)
// encontrar a posição de um elemento no array
console.log(techs)

let index = techs.indexOf('css') // qual é o index de css -> 2
techs.splice(index, 3) // remove os elementos começando a de index ate a x posição

console.log(index)
console.log(techs)



console.log(["a", 
    {type: "array"}, 
    function() {return "alô"},
    ][2]()) // Aqui acessa o elemento do array com [2] e chama a função com ()
