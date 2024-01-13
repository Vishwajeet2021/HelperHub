//mST5quT7Cb1KENcU
import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import {errorMiddleware} from './middleware/error.js';
import user from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
config({path:"./configuration/config.env"});
export const app=express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/v1", user);
app.use(errorMiddleware);