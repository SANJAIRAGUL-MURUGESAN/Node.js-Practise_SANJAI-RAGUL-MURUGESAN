const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream('suma.txt');
    readStream.pipe(res);
    res.end()
})
server.listen(5000,()=>{
    console.log('Server Listening to Port Number 5000....')
})
