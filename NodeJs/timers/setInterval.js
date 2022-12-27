// setInterval roda uma função em um determinado interval de tempo

const timeOut = 1000

const checking = () => {
    console.log('checking!')
}

setInterval(checking, timeOut)