import mongoose from 'mongoose';
export const connectMongoDB=async()=> {
  
  const connectionString='mongodb+srv://sourav9934413639:mST5quT7Cb1KENcU@helperhub-db.7xoqtkf.mongodb.net/?retryWrites=true&w=majority'
  try {
    await mongoose.connect(connectionString);
    console.log('Database connected successfully...');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  }
}


