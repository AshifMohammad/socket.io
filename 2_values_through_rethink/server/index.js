const io = require('socket.io')();
const r = require('rethinkdb')



const createDrawing = ({connection, name}) =>{
    r.table('drawings')
        .insert({
            name,
            timestamp: new Date()
        })
        .run(connection)
        .then(()=>{
            console.log('created a drawing with rethink db', name)
        })


}


const subscribeToDrawing = ({client, }) =>{}

r.connect({
  host: 'localhost',
  port:28015,
  db: 'awesome_whiteboard'
}).then((connection)=>{
  io.on('connection', (client) => {

      client.on('createDrawing',({name})=>{
          createDrawing({connection,name})
      })
    // client.on('subscribeToTimer', (interval) => {
    //   console.log('client is subscribing to timer with interval ', interval);
    //   r.table('timers')
    //   .changes()
    //       .run(connection)
    //       .then((cursor)=>{
    //         cursor.each((err, timerRow)=>{
    //           client.emit('timer',timerRow.new_val.timestamp)
    //           console.log(err&&`${err}there is a error`)
    //         });
    //       })
    //
    // });
  });
})



const port = 8000;
io.listen(port);
console.log('listening on port ', port);

