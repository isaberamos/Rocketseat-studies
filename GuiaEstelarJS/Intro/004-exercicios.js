// 1. Declarando uma variável de nome weight
let weight

// 2. Tipo da variável
console.log(typeof weight)

/* 3. Declare a variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (integer)
        * stars: Number (float)
        * isSubscribed: Boolean
*/
let name = 'Ana'
let age = '25'
let stars = 2.5
let isSubscribed = false

/* 4. A variável student abaixo é de que tipo de dados?
   4.1 Atribua a ela as mesmas propriedades e valores do exercício 3
   4.2 Mostre no console a seguinte mensagem: <name> de idade <age> pesa <weight> kg
*/

let student = {
    nameStudent: 'Isabelle',
    weightStudent: '50'
};

console.log(typeof student)
console.log(`${student.nameStudent} de idade ${student.age} pesa ${student.weightStudent} kilos`)

/* 5. Declare uma variável do tipo array de nome Students e atribua a ela nenhum valor */

let Students = []

/* 6. Reatribuir um valor para a variável acima colocando dentro dela o objeto student da questão 4 */

Students = [
    student
] 

console.log(Students[0])

/* Criar um novo student e colocar na posição 1 do array */

const anotherStudent = []

anotherStudent = [
    nameStudent = 'Franco',
    age = '29'
]

Students[1] = anotherStudent
console.log(Students)
