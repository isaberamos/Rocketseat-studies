const { EventEmitter} = require('events')

const ev = new EventEmitter()

ev.on('say Something', (message) => {
    console.log('Eu ouvi você', message)
})

ev.emit('say Something', 'Ana')


// executa somente uma vez
/*ev.once('say Something', (message) => {
    console.log('Eu ouvi você')
})

ev.emit('say Something', 'Ana')
ev.emit('say Something', 'João')*/
