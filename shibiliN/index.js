const express=require('express');
const { request } = require('http');
const path=require('path')
const bodyParser=require('body-parser')

const app=express() ;

app.use(express.bodyParser())

app.get('/signup',(req,res)=>{
    res.sendFile(path.join(__dirname,'signup.html'))
}) ;


app.post('/signup',(req,res)=>{
    res.send('sign up succesfully');
    var keyName=request.query.Key;
    console.log(keyName);
}) ;




app.get('/',(req,res)=>{
   
    res.send('Hi there')
}) ;
app.listen(7000,()=>{
    console.log('server started successfully')
})

