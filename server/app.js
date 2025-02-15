import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js';


const app = express();
dotenv.config();
dbConnect();

// console.log(process.env.PORT);


app.listen(process.env.PORT,()=>{
    console.log(`server is running ${process.env.PORT}`);
    
});