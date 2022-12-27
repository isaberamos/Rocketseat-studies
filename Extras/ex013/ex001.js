let dados = {nome: 'Ana',
sexo: 'Fem',
peso: 10.5,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}}

dados.engordar(2)
console.log(`Seu pet ${dados.nome} pesa ${dados.peso}Kg`)