const express = require('express')

const app = express()

app.get('/home/:uid',(req,res,next)=>{
    const{uid}=req.params
    console.log(uid.uid)
    res.send('hi')
})

app.listen(5000,()=>{
    console.log('Server Listening To Port Number 5000...')
})