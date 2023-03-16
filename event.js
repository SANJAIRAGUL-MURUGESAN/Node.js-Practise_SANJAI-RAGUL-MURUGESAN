const http = require('http');
const EventEmitter = require('node:events')
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();


const server = http.createServer((req,res)=>{
    res.setHeader( 
        'content-type', 'plain/text'
    )
    if(req.url==='/home'){
        myEmitter.on('event', (a, b) => {
            console.log(a,b)
        });
        myEmitter.on('event', (a, b) => {
            setImmediate(() => {
                console.log('this happens asynchronously');
            });
        });
        myEmitter.emit('event','a','b');
    }
    res.write('hi')
    res.end()
})
server.listen(5000,()=>{
    console.log('Server Listening to Port Number 5000')
})
