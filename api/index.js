import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config(); 

// mongoose.connect(process.env.MONGOODB_URI)
//   .then(() => {
//     console.log('MongoDb is connected');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
  connectDB()
});

const connectDB = async () => {
  try{
    const add = await mongoose.connect(process.env.MONGURI);
    console.log(`MongoDB Connected`);
  
  }
  catch(e){
    console.log(e.message)
  }
  };

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
