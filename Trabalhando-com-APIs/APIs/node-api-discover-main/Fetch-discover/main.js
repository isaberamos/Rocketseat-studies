const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then(response => response.json())
        // Dentro do data há o conteúdo do response.json
        .then(data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

// GET
function getUser(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            // Atribuindo conteúdo às tags HTML
            userName.textContent = data.name
            userCity.textContent = data.city
            userAvatar.src = data.avatar
        })
        .catch(error => console.error(error))
}

// POST
function addUser(newUser) {
    fetch(url, {
        method: 'POST',
        // Informar o tipo de corpo e o conteúdo (newUser). Aqui pega o objeto e transforma em texto simples para mostrar em HTMl, visto que este não mostra a estrutura de objetos.
        body: JSON.stringify(newUser),
        // Padrão
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    // Aqui já está sendo transformado em JSON e por isso...
    .then(response => response.json)
    // ... não é necessário fazer o JSON.stringify porque, como dito anteriormente, já está sendo convertido na linha acima, diferente do que está no Body do Fetch acima
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

// UPDATE
function updateUser(updatedUser, id) {
    // É necessário verificar o que a API está esperando receber, conforme consulta na documentação. Pode ser tanto no body, quanto na URL, por exemplo
    fetch(`${url}/${id}`, {
        method: 'PUT',
        // Pega o objeto e transforma em texto simples
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-Type": "application/json; CHARSET=UTF-8"
        }
    })
    .then(response => response.json())
    // Retorno de texto simples na documentação da API, por isso não é preciso transformar em JSON
    .then(data => alertApi.text.Content = data)
    .catch(error => console.error(error))
}

// DELETE
function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json; CHARSET=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.text.Content = data)
    .catch(error => console.error(error))
}

deleteUser(1)

const updatedUser = {
    name: "Franco Dimeo",
    avatar: "http://picsum.photos/200/300",
    city: "Laprida"
}

updateUser(updatedUser, 1)


const newUser = {
    name: "Ana Dimeo",
    avatar: "http://lorempixel.com/400/200",
    city: "Necochea"
}

addUser(newUser)

getUsers()
getUser(1)
