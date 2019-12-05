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


 const subscribeToDrawing = ({client, connection}) =>{ r.table('drawings')
    .changes({include_initial:true})
    .run(connection)
    .then(cursor=>{ cursor.each((err, drawingRow ) =>{ client.emit('drawing', drawingRow.new_val)
        }
    )
    })}

r.connect({
    host: 'localhost',
    port:28015,
    db: 'awesome_whiteboard'
}).then((connection)=>{
    io.on('connection', (client) => {

        client.on('createDrawing',({name})=>{
            createDrawing({connection,name})
        })

        client.on('subscribeToDrawing', ()=>{
            subscribeToDrawing({client,connection})
        })
    });
})



const port = 8000;
io.listen(port);
console.log('listening on port ', port);

