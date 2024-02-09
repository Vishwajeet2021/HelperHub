import ErrorHandler from "../Utility/ErrorHandler.js";
import { bankDetails } from "../models/paymentDetails.js";

export const paymentDetails=async(req,res,next)=>{

    req.body.user =req.user.id;

    const {cardName,cardNumber,expiryDate,cvv}=req.body;
    const debitCardDetails = {
        cardName,
        cardNumber,
        expiryDate,
        cvv,
    
      };
    try{
      const debitInfo = await bankDetails.findOneAndUpdate({user:req.user.id}, debitCardDetails, {
        new: true,
        upsert:true,
        runValidators: true,
        useFindAndModify: false,
      });
      if(!debitInfo){
        return next(new ErrorHandler("Incorrect bank details information",400));
      }
    
      res.status(200).json({
        success: true,
        debitInfo,
        message:"Account Information Updated Successfully...",

      });
    } catch (error) {
      // Check if the error is a Mongoose validation error
      if (error.name === "ValidationError") {
        const validationErrors = Object.values(error.errors).map(
          (err) => err.message
        );
        return next(new ErrorHandler(validationErrors.join(", "), 400));
      } else {
        // For other types of errors, pass them to the error handling middleware
        return next(error);
      }
    }
}