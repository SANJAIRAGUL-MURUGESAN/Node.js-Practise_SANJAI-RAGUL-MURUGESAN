const http = createServer((req,res)=>{
    // Setting Header for Response
    res.setHeader('content-type' , 'plain/text') 
    res.writeHead(200,{
        'content-type' : 'plain/text'
    })
    if(req.method==='GET'){
        res.write('Here is Respose For Your Request')
        res.end()
    }
})
server.listen(5000,()=>{
    console.log('Server Listening to Port Number 5000....')
})