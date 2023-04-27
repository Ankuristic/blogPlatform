const express = require('express');
const app =express();
const port = 6000;

// use exporess router;
app.use('/',require('./routes/index'))

app.listen(port,function(err){
    if(err){
        console.log('error is handling the server:${err}')
    }

    console.log('Server is running on the port : ${port}')
})