import express, { response } from 'express';
import mongoose from 'mongoose';
import nodemailer from 'nodemailer' 
import bodyParser from 'body-parser';//npm i body parser
import cors from"cors";//npm i cors
import Student from './Models/Student';
import multer from 'multer';
//const express = require('express')
const app = express()  
// var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
    mongoose.connect('mongodb+srv://settiveera9652:H5bypsDMVWzzOkaW@cluster0.qvbwjlp.mongodb.net/Data?retryWrites=true&w=majority')
    .then(()=>app.listen(4000))
    .then(()=>
    console.log("connected to database & listening to localhost 4000")  //H5bypsDMVWzzOkaW
)
.catch((err)=>console.log(err));

app.post ('/a', async (req,res,next)=>{          
    console.log(req.body)//form data from the frontend
    const{q1,q2,q3,q4,q5}=req.body
    const student =new Student({
          q1,
          q2,
          q3,
          q4,
          q5
    })
    try{
  student.save();
    }
    catch(err){
        console.log(err)
    }
    // await student.save().then(response=>{console.log(response)}).catch(err=>{console.log(err)})
    return res.send("OK")
   
})

