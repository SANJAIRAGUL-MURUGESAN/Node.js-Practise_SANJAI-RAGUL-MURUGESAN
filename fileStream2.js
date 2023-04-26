const http = require('http')
const fs =require('fs')

// async iterator 

const server = http.createServer((req,res)=>{
    console.log(req.method)
    async function logChunks(readable) {
        let result=''
        for await (const chunk of readable) {
            // console.log(chunk);
            result=result+chunk;
        }
        res.write(result)
        res.end()
    }
    // Here we can Insert Input File
    const readable = fs.createReadStream('suma.txt', {encoding: 'utf8'});
    logChunks(readable);
})
server.listen(5000,()=>{
    console.log('Server Listening To Port Number 5000....')
})
    