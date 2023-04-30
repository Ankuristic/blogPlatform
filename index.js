// const express = require('express');
// const app =express();
// const port = 6000;

// // use exporess router;
// app.use('/',require('./routes/index'))

// app.listen(port,function(err){
//     if(err){
//         console.log('error is handling the server:${err}')
//     }

//     console.log('Server is running on the port : ${port}')
// })

const express= require('express');
const mongoose= require('mongoose');
const blogrouter= require("./routes/blog");
// const config =  require("./config/mongoose")


const app=express();

const port=9000;
const url= "mongodb+srv://Ankuristic12:Adya1998@cluster0.0lufvph.mongodb.net/?retryWrites=true&w=majority";
console.log("url",url);

mongoose.connect(url,{useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

app.use('/blogs',blogrouter);



app.listen(port, () =>{
    console.log('Server started'+  port);
})