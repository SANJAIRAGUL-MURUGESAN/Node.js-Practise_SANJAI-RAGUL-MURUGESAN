const http = require('http')

const server = http.createServer((req,res)=>{
    let body=[]
    if(req.url==='/home'){
        req.on('data',(chunk)=>{
            body.push(chunk)
        }).on('end',()=>{
            body = Buffer.concat(body).toString();
            res.write(body)
            res.end()
        })
    }
})
server.listen(5000,()=>{
    console.log('Server Listening to Port Number 5000')
})