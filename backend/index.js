const express = require('express');
const mongoose =require("mongoose")
const app = express();
const path = require('path');
app.use('/welcome',(req,res)=>{
    res.send("welcome testing is with")
}),

// database connection
mongoose.connect("mongodb://localhost:27017/testing-db",()=>{
console.log("connection successfull......")});

app.listen(9000,()=>{
    console.log('App is running on 9000')
})