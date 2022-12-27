/* Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F 
*/

function calculaNota(nota) {
    let mensagem

        if(nota >= 90 && nota <= 100) {
            mensagem = 'Nota A'
        } else if(nota >= 80 && nota <= 89) {
            mensagem = 'Nota B'
        } else if(nota >= 70 && nota <= 79) {
            mensagem = 'Nota C'
        } else if(nota >= 60 && nota <= 69) {
            mensagem = 'Nota D'
        }else if(nota < 60){
            mensagem = 'Nota F'
        } else {
            mensagem = 'Nota inválida'
        }

    return mensagem   
}

console.log(calculaNota(154))