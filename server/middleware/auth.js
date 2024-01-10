import { User } from "../models/user";
import jwt from 'jsonwebtoken';
import ErrorHandler from "../Utility/ErrorHandler";
export const isAuthenticated=async()=>{
    const { token } = req.cookies;

    if (!token) {
      return next(new ErrorHandler("Please Login to access this resource", 401));
    }
  
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  
    req.user = await User.findById(decodedData.id);
  
    next();
}