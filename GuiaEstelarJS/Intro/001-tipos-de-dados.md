# Undefined vs Null

* No JavaScript temos o tipo de dados Undefined, que representa valores indefinidos, e o tipo de dados null, que são muitas vezes confundidos. A diferença dos dois é que null é considerado como um objeto vazio, ou seja, algo indefinido não existe, já algo null existe mas não tem valor algum.


# Object

* O tipo de dado Object é estrutural, contendo atributos, ou propriedades, e métodos, ou funcionalidades. Um objeto é denotado com os caracteres { }, atributos e métodos com nome: valor . Por exemplo { nome: "João", idade: 20 }.

    console.log({
        nome: "Ana",
        idade: 22,
        andar: function() {
            console.log('andar')
    })

# Array

* O tipo de dados Array, ou vetor, também é estrutural, e consiste em uma lista de dados agrupados, um Array é denotado com os caracteres [ ] , por exemplo: [ "Leite", "Ovos", "Manteiga", 1, 2 ] .

console.log([
    "Ovo", 
    "Laranja",
    89
])

# Tipos de dados

* Conforme o ECMAScript Standard (o padrão do orgão que padroniza o JavaScript) temos 9 tipos de dados organizados em 4 categorias: 

* Data types: 
    - Primitive
    - Primitive Value
    - Structural
    - Structural Primitive 

## Primitivos

- String
- Number
- Boolean
- Undefined
- Symbol
- BigInt

# Estruturais

- Object 
    - ARRAY
    - MAP
    - SET
    - DATE
    - ... 

- Function

- Primitivo estrutural 

- null
