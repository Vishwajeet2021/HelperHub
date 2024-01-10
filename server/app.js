//mST5quT7Cb1KENcU
import express from 'express';
import cors from 'cors';
import {errorMiddleware} from './middleware/error.js';
import user from './routes/userRoutes.js';
import cookieParser from 'cookie-parser';
export const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}));
app.use("/api/v1", user);
app.use(errorMiddleware);