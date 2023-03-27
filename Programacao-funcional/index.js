// A programação funcional organiza uma linha de raciocínio para resolver problemas através de várias funções que não modificam os dados fora dela.

// Programação Imperativa x Programação Declarativa: A forma imperativa é mais passo a passo, já a declarativa é o que deve ser feito e como não fazer. Exemplo:

// Imperativa
let number = 2

function square() {
    return number * number
}

number = square()

// Declarativa
const square = n => n * n

// Imatubilidade é quando uma variável não muda. Já o stateless é quando não guarda o estado, ou seja, ela só conhecerá os dados que foram entregues. Exemplo:

let number1 = 2

function square() {
    return number1 * number1
}

number1 = square()

// Stateless
const square = n => n * n


// Funções independentes só dependem do que for enviada a ela. Devem ter ao menos um argumento e retornar algo. Nada que acontecer lá dentro afetará o mundo externo porque os dados são imutáveis e stateless. Também não são usados loops, caso precisar, é usado recursão.


// Funções puras não dependem de nenhum dado externo a não ser o que for passado como argumento. Ela não sofre interferência externa. Se o argumento for o mesmo, não poderá retornar diferente. Não há nenhum efeito colateral no código, nem modificar ou guardar os dados e estados.


// First-class functions podem estar em qualquer lugar, inclusive, como parâmetro de outras funções. Ela pode ser entendida como uma variável. Exemplo:

const sayMyName = () => console.log('Isa')
const runFunctions = fn => fn()

runFunctions(sayMyName)
runFunctions(() => console.log('Olá'))


// High-order functions são funções que recebem funções como argumentos e podem retornar outras funções. Por exemplo:

const numbers = [2,4,6,8]
const square = n => n * n

const squaredNumber = numbers.map(square)

// Currying ou aplicação parcial da função
const pause = wait = fn => setTimeout(fn, wait)
pause(600) ( () => console.log('waiting 600ms'))


// Composição/encadeamento de funções. Retorna um dado e vai para outra função e retorna outro dado e vai para outra função e assim vai... Exemplo:

const people = ['Ana', 'Isadora', 'Jo', 'Isabel']
const upperCasePeopleThatStartsWithI = people.filter(person => person.startsWith('I')).map(dperson => dperson.toUpperCase());