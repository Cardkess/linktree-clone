// Importing Express and create an instance of the Express
const express = require('express');
const cors = require('cors');

// Load .env variables
require("dotenv").config({ path: __dirname + '/./.env' });

const PORT = process.env.APP_PORT;

const app = express();

// Defining middleware functions to parse request bodies and handle CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

console.log(PORT);