var idade = 22
console.log(`Vpcê tem ${idade} anos.`)
if (idade < 16) {
    console.log('Ainda não vota.')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório!')
}