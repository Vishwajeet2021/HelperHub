//mST5quT7Cb1KENcU
import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import {errorMiddleware} from './middleware/error.js';
import user from './routes/userRoutes.js';
import userContact from './routes/contactRoutes.js';
import paymentDetailsRoutes from './routes/paymentDetailsRoutes.js'
import cookieParser from 'cookie-parser';
import paymentRoutes from './routes/paymentRoutes.js'
config({path:"./configuration/config.env"});
export const app=express();

app.use(cors({
    origin:'http://localhost:3001',
    credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1", user);

app.use("/api/v1", userContact);
app.use("/api/v1", paymentDetailsRoutes);
app.use('/api/v1',paymentRoutes);
app.get("/getKey",(req,res)=>{
    res.status(200).json({
        success:true,
        key:process.env.RAZORPAY_KEY_ID
    })
})
app.use(errorMiddleware);