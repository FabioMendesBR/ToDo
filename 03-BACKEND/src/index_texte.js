const express = require('express');
const server = express();
server.use(express.json());

server.get('/teste',(req,res)=>{
    res.send("Tudo certo com a nossa API !")
});

server.listen(3000,() =>{
    console.log('API ONLINE')
});