// clearTimeOut cancela um timOut

const timeOut = 3000

const finished = () => {
    console.log('done!')
}

let timer = setTimeout(finished, timeOut) 
clearTimeout(timer) // Aqui já cancela o Timeout