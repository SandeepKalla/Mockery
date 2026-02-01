import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import connectDb from './config/db.js';

import cors from 'cors';


const app= express();
const PORT= process.env.PORT || 5000;

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true,
}))


app.listen(PORT,()=>{

  connectDb()
  console.log(`Server is running on port ${PORT}`);
})