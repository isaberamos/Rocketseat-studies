// setTimeOut roda uma função depois de x milissegundos

const timeOut = 3000

const finished = () => {
    console.log('done!')
}

setTimeout(finished, timeOut) // 2. Depois chama a callback
console.log('Mostrar') // 1. Mostrará isso primeiro 