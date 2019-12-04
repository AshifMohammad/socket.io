const io = require('socket.io')()

const port = 8000;

//on event for subscribing events

io.on('connection',(client)=>{
    client.on('subscribeToTimer',(interval)=>{
        console.log('client is subscribing to the time interval',interval);
        setInterval(()=>{
            client.emit('timer',new Date().toUTCString())
        }, interval)
    })

})



io.listen(port)
console.log(`listening to port: ${port}`)