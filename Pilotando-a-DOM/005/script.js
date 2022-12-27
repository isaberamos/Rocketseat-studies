// Eventos

/*function print() {
    console.log('print')
}*/
/*
const input = document.querySelector('input');

input.onkeydown = function() {
    console.log('rodei')
}

input.onkeyup = function() {
    console.log('rodei')
}
*/

/*const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', print)

function print() {
    console.log('print')
}*/


/*const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', print)

function print() {
    console.log('print')
}

//h1.onclick = print

h1.addEventListener('click', function () {
    console.log('outro momento')
})
*/

const input = document.querySelector('input');

input.onkeydown = function (event) {
    console.log(event.currentTarget)
}
// O target é o input