import mongoose from 'mongoose';
import validator from 'validator';
const paymentDetailsSchema=new mongoose.Schema({
    cardName:{
        type:String,
        trim:true,
        required:[true,"Please enter your name as mentioned on your debit card" ],
    },
    cardNumber:{
        type: String,
        validate: {
          validator: function (value) {
            return /^[0-9]{16}$/.test(value);
          },
          message: 'Your card number must be a 16-digit number.',
        },
    },
    expiryDate:{
        type:Date,
        validate: {
            validator: function (value) {
                return value > new Date();
            },
            message: 'Expiry date must be in the future.',
        },
    },
    cvv:{
        type:String,
        validate: {
            validator: function (value) {
              return /^[0-9]{3}$/.test(value);
            },
            message: 'Your CVV must be a 3-digit number.',
          },
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
})
export const bankDetails=mongoose.model("bankDetails",paymentDetailsSchema);