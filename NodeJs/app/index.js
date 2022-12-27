const questions = [
    'O que aprendi hoje?',
    'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas ajudei hoje?'
]

// o stdout escreve na tela
const ask = (index = 0) => {
    return process.stdout.write('\n' + questions[index] + " > ")
}

ask()

// o on vai ficar atento aos dados que forem recebidos para rodar uma função
const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim() + '\n')
    // Se for menor, roda o answers novamente
    if (answers.length < questions.length) {
        ask(answers.length) // o length é pra pegar a próxima questão
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(
        `Legal!
        É importante ter essas reflexões
        
        O que você aprendeu hoje foi:
        ${answers[0]}
        
        O que me deixou aborrecido? E o que eu poderia fazer para melhorar?
        ${answers[1]} 
        
        O que me deixou feliz hoje?
        ${answers[2]}}
        
        Quantas pessoas ajudei hoje?
        ${answers[3]}
        
        Volte amanhã para novas reflexões :)`
    )
})