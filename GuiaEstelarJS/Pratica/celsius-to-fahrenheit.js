/* Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C') // Recebe o parâmetro degree e converte para celsius, procurando pela string 'C'
    const fahrenheitExists = degree.toUpperCase().includes('F')


    // Fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // Fluxo padrão - F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", "")); // Vai extrair o valor da temperatura (degree)
    let formula = (fahrenheit)  => (fahrenheit - 32) * 5/9 
    let degreeSign = 'C' // Concatena com o resultado final

    
    // Fluxo alternativo C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", "")); // Vai extrair o valor da temperatura (degree)
        formula = celsius  => celsius * 9/5 + 32 // Fluxo padrão - transformação para Celsius
        degreeSign = 'F' // Concatena com o resultado final
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('32C')) // Teste
} catch (error) {
    console.log(error.message)
}
