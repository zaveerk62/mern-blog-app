import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json())
app.use(cookieParser())

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})
