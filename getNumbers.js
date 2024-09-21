import express from 'express';

const app = express();

const port = 3000;

app.get('/first', (req, res)=>{
    res.json({"Key":"You've reach the first request"});
})
app.get('/second', (req, res)=>{
    res.json({"Key":"You've reach the second request"});
})
app.get('/third', (req, res)=>{
    res.json({"Key":"You've reach the third request"});
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})