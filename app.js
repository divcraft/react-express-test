// import express from 'express';
const express = require('express');
// import mongoose from 'mongoose';
// import path from 'path';
const path = require('path');
// import cors from 'cors';
const cors = require('cors');
// import bodyParser from 'body-parser';
const bodyParser = require('body-parser')
// import morgan from 'morgan';
const morgan = require('morgan')
// import config from './config';

// // routes
// import authRoutes from './routes/api/auth';
// import itemRoutes from './routes/api/items';
// import userRoutes from './routes/api/users';

// const { MONGO_URI, MONGO_DB_NAME } = config;

const app = express();

// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan('dev'));
// Bodyparser Middleware
app.use(bodyParser.json());

// // DB Config
// const db = `${MONGO_URI}/${MONGO_DB_NAME}`;

// // Connect to Mongo
// mongoose
//   .connect(db, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true
//   }) // Adding new mongo url parser
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));

// // Use Routes
// app.use('/api/items', itemRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
   // Set static folder
   app.use(express.static('client/build'));

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

app.get('/api', (req, res) => {
   res.json({
      id: 1,
      name: 'Tomasz',
      surname: 'Ogonowski'
   })
})


module.exports = app;