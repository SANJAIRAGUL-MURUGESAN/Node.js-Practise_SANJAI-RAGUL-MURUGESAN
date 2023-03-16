const {AsyncLocalStorage} = require('node:async_hooks')
const http = require('http')

const asyncLocalStorage = new AsyncLocalStorage();

let idseq = 0;
const server = http.createServer((req,res)=>{
    if(req.url==='/home'){

        // function of logWithId

        function logWithId(message){
            const id = asyncLocalStorage.getStore();
            console.log('id is',id)
            if(id!==undefined){
                console.log(message)
            }
        }


        asyncLocalStorage.run(idseq++,()=>{
            logWithId('Start')

            // Start of asynchronous Function

            setTimeout(()=>{
                console.log('running')
            },2000)

            // End of asynchronous Function

            logWithId('Finish')

        })
        res.end('finish')
    }
})

server.listen(5000)