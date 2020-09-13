const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000
       

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/', async (req,res)=> {
    res.sendFile(path.join(__dirname + '/index.html'))
})


app.listen(port,()=>console.log(`Listening on port ${port}`))