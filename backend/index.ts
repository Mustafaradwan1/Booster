import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import api from "./midleware/api";
import cookieParser from  'cookie-parser';
import cors from "cors"
import error from "./midleware/error";
dotenv.config();
const app = express()
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI!)
    .then(()=> console.log('Connected to MongoDB'))
    .catch(e=>console.error(e))
app.get('/', async (req,res,next)=>{
    try{
        res.status(200).json({message:"Hello World"})
    }catch (e) {
        next(e)
    }
})
app.use('/api' , api)
app.use(error)
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}\n`);
});