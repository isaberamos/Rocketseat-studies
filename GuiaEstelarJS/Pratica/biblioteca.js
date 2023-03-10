/* 
    Desafio:

    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
console.log(booksByCategory[0].books[0].title)


// Total de categorias
const totalCategories = booksByCategory.length
console.log('Total de categorias: ', totalCategories)

// Total de livros das categorias
for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category) // Se usasse somente o category, acessaria todas as propriedades do array -> {category: 'Riqueza', books: Array(3)}
    console.log(category.books.length)
}
/*

// Número de autores
function countAuthors() {
    let authors = [];
    
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1) // Usa o indexOf para verificar se existe o author em determinada posição; se for -1 é porque ele não achou o author
                authors.push(book.author)
        }
    }

    console.log('Total de autores: ', authors.length)
}

countAuthors()


// Número de livros do autor Augusto
function booksOfAuthor(author) {
    let books = [];
    
    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author)
                books.push(book.title)
        }
    }

    console.log('Livros do autor: ', books)
}
booksOfAuthor('Augusto Cury')*/
