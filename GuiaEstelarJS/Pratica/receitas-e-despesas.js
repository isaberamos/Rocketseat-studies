/* 
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let familia = {
    receitas: [2500, 685.17, 1100, 2000],
    despesas: [248.47, 1600.95, 2000, 100]
}


function somaDespesas(array) {
    let total = 0;

    for (let valores of array) {
        total += valores
    }
     
    return total
}

function custoDeVida() {
    const calculaReceita = somaDespesas(familia.receitas)
    const calculaDespesa = somaDespesas(familia.despesas)

    total = calculaReceita - calculaDespesa

    if (total >= 0){
        console.log(`Saldo positivo, restando ${total.toFixed(2)}`)
    } else {
        console.log(`Saldo negativo, restando ${total.toFixed(2)}`)
    }
}

custoDeVida()
