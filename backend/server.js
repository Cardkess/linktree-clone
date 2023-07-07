// Importing Express and create an instance of the Express
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Load .env variables
require("dotenv").config({ path: __dirname + '/./.env' });
const authRoutes = require('./routes/auth/routes');
const linkRoutes = require('./routes/links/routes');
const settingsRoutes = require('./routes/settings/routes');

const PORT = process.env.APP_PORT;

const MONGODB_URI = process.env.MONGODB_URI;

const DATABASE_NAME = process.env.DATABASE_NAME;

// Connect to the MongoDB database
mongoose.connect(MONGODB_URI + DATABASE_NAME, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// Defining middleware functions to parse request bodies and handle CORS
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Internal Server Error' });
});

// registering routes
app.use('/api/auth', authRoutes);
app.use('/api/links', linkRoutes);
app.use('/api/settings', settingsRoutes);

// Check the MongoDB connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
  // creating server and logging to console
  app.listen(PORT, () => console.log(`It's alive on http://localhost:${PORT}`));
});




