import express, { response } from 'express';
// const express = require('express')
// create object of express
const app = express();
// port number on which you want to run the application
app.use(express. json());
const port = 3000;
// res:request; res:responde
// app.get(), one of the initial five methods
// node is a self server application
// request for /hello, so you need to add /hello at the end of hostaddress
app.get('/hello', (req, res)=>{
    res.json({"Key": "Hello World"})

}) 
app.get('/first', (req, res)=>{
    res.json({"Key": "Hello World"})

}) 

// query example
app.get('/queryexample', (req, res)=>{
    // always pass the query bu using req
    //const first_name = req.query.fname;
    //const last_name = req.query.lname;
    //res.send(`Your first name is ${first_name} and lasst name is ${last_name}`)
    const {fname, lname} = req.body;
    console.log(fname);
    res.send(fname);

}) 
// 
app.post('/postexample', (req, res)=> {
    const req_body = req.body;
    res.send(req_body);
})
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})
