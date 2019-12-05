import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

export const subscribeToDrawings=(cb)=> {
  socket.on('drawing', cb);
  socket.emit('subscribeToDrawing', 1000);
}

export const createDrawing = name => { console.log(name)
  return socket.emit('createDrawing', {name})}


