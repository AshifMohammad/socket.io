import openSocket from "socket.io-client"

const socket = openSocket('http://localhost:8000')

export const subscribeToTimer = callBack =>{

    socket.on('timer',timestamp=> callBack(timestamp));
    socket.emit('subscribeToTimer',1000)

}