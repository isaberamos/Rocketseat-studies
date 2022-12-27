'use strict'


const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

// Variável global para não interagir com os dados do Novo Cliente; as função serão independentes
/* const tempClient = {
    nome: "Joice",
    email: "joice@gmail.com",
    celular: "479966456129",
    cidade: "Bombinhas"
} */

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [] // Lê o que tem no localstorage, transforma em JSON e armazena na variável db_client, se não existir, retorna um array vazio
const setLocalStorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient)) // Transforma o Objeto em String e o SET pega/envia as informações do localStorage

// CREATE
//Função que recebe um cliente e não sabe que tem um formulário, só sabe que tem um cliente que deve ser cadastrado no localstorage
const createClient = (client) => { 
    const dbClient = getLocalStorage()
    dbClient.push (client) // recebe os elementos e o push adiciona os elementos
    setLocalStorage(dbClient) // Envia para o LS
}

//READ
const readClient = () => getLocalStorage()

//UPDATE
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbClient[index] = client // Pega a posição e recebe o novo cliente atualizado 
    setLocalStorage(dbClient) // Envia para o LS
}

//DELETE
const deleteClient = (index) => {
    const dbClient = readClient() // Primeiro vai ler
    dbClient.splice(index, 1) // Pegar a posição
    setLocalStorage(dbClient) // Envia/informa ao LS
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

// Interação com o layout para verificar se todos os campos estão válidos

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field') // Pega todos os elementos da classe modal-field
    fields.forEach(field => field.value = "") // Varre todos os campos e pega cada campo e iguala a vazio
}

const saveClient = () => {
    if (isValidFields()) {
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
            cidade: document.getElementById('cidade').value,
        }
        createClient(client)
        updateTable()
        closeModal()
    }
}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.telefone}</td>
        <td>${client.email}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
        `
    document.querySelector('#tableClient>tbody').appendChild(newRow) // Ao criar uma nova linha vazia e ser preenchida, será preenchida no tbody, fazendo parte dos nós do DOM
}

// <button type="button" class="button green" data-action="edit">Editar</button> :  está sendo criado um atributo personalizado com javascript

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

// Quando acionar o updateTable, ele lê o que está no LS, traz o array e interage com cada linha/elemento(JSON que contém as infos dos clients) desse array, por sua vez, o clienteRow cria a linha
const updateTable = () => {
    const dbClient = readClient() // Le os dados do LS
    clearTable() // Limpar a tabela para não atualizar com todos os mesmos campos novamente
    dbClient.forEach(createRow) // Le os dados do LS (forEach - envia pro callback três informações: o elemento do array, index ou índice) e cria uma linha (createRow), enviando os dados para a tabela
}

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome
    document.getElementById('email').value = client.email
    document.getElementById('telefone').value = client.telefone
    document.getElementById('cidade').value = client.cidade
}

const editClient = (index) => {
    const client = readClient()[index]
    console.log(client)
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split("-")

        if (action == 'edit') {
            editClient(index)
        } else {
            console.log('deletando o cliente')
        }

        //console.log(action, index)

        // console.log(event.target.id.split("-")) // - O target é para direcionar ao botão específico
    }
    
}

updateTable()

// Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)

// O addEventListener manda para o callback o evento que aconteceu