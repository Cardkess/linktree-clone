// Importing Express and create an instance of the Express
const express = require('express');
const app = express();

// Defining middleware functions to parse request bodies and handle CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());