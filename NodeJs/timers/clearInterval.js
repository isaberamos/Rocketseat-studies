// cancela um setInterval registrado

const timeOut = 1000

const checking = () => {
    console.log('checking!')
}

let interval = setInterval(checking, timeOut)

// função que cancela o intervalo
setTimeOut ( () => clearInterval(interval), 3000) // cancela o intervalo

