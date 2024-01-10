import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please enter your name"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [4, "Name should have atleast 4 characters"],
    },
    email:{
        type:String,
        required:[true,"Please enter your email ID"],
        unique:true,
        validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minLength: [8, "Password should be greater than 8 characters"],
        select: false,
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'employee'],
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
    resetPasswordToken: String,
  resetPasswordExpire: Date,
})

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });

  userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };

  userSchema.methods.getResetPasswordToken = function () {
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
  
    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
  
    return resetToken;
  };
export const User=mongoose.model("users",userSchema);