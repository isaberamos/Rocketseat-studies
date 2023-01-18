const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}


function addNewUser() {
    axios.post(url, {
        name: "Ana Dimeo",
        avatar: "https://picsum.photos/200/300",
        city: "Paraty"
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        // Dentro do response as informações vem dentro do data
        const data = response.data
        userName.textContent = data.name
        userCity.textContent = data.city
        userID.textContent = data.id
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name: "Katlyn Kruger", 
    avatar: "https://picsum.photos/200/300",
    city: "Bombinhas"
}

/* Da pra fazer dessa forma passando somente o newUser como parâmetro lá no axios.get
const newUser = {
    name: "Ana Dimeo",
    avatar: "https://picsum.photos/200/300",
    city: "Paraty"
}*/

getUsers()
//addNewUser()
getUser(2)
//updateUser(4, userUpdated)

deleteUser(1)