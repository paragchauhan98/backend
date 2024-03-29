const express= require('express');
const bodyParser=require('body-parser')
const cors=require('cors')
const favicon = require('serve-favicon')
const mongoose=require('./db.js')
const app=express()
const router=require('./routes.js');
const route = require('./routes.js');

const path =require('path')

app.use(express.static(path.join(__dirname,"frontend")));
app.get((req,res)=>{
    res.sendFile(path.join(__dirname,"frontend/index.html"));
})

app.use(bodyParser.json())
app.use(cors());
const PORT=process.env.PORT || 3000 || 8080

app.listen(PORT,()=>{
    console.log('server has started on', PORT)
})



app.use('/',route)
app.use('/',route)
