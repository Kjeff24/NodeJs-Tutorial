const EventEmitter = require('events')


const customEmitter = new EventEmitter()

customEmitter.on('response', (firstname, lastname,age)=>{
    console.log(`data received: Name: ${firstname} ${lastname} and age: ${age}`)
})

customEmitter.on('response', ()=>{
    console.log('some other data received')
})

customEmitter.emit('response', 'john', 'doe', 45)