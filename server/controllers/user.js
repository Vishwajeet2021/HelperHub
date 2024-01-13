import { sendToken } from '../Utility/token.js';
import {User} from '../models/user.js';
export const register=async(req,res)=>{
    const {name,email,password}=req.body;
    const user=await User.create({name,email,password});
    sendToken(user, 201, res);
}

export const login=async(req,res)=>{
    const {email,password}=req.body;
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter Email & Password", 400));
      }
    
      const user = await User.findOne({ email }).select("+password");
    
      if (!user) {
        return next(new ErrorHandler("Invalid email or password", 401));
      }
    
      const isPasswordMatched = await user.comparePassword(password);
    
      if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password", 401));
      }
    
      sendToken(user, 200, res);
}