// Importing Express and create an instance of the Express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Load .env variables
require("dotenv").config({ path: __dirname + '/./.env' });
const userRoutes = require('./routes/users/routes');
const authRoutes = require('./routes/auth/routes');

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/linktree-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.APP_PORT;

const app = express();

// Defining middleware functions to parse request bodies and handle CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal Server Error' });
});

// registering routes
app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);

// Check the MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
  // creating server and logging to console
  app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));
});




