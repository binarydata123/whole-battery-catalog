const express = require('express');
const connectDB = require('./src/utils/db');
//const connectDB = require('./db/db.js');
const app = express();
const cors = require('cors');
const logError = require('./logger');
const routes = require('./src/routes');
const path = require('path');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

// Connect to Trigger

// Middleware
app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');

// Global error handler middleware
const globalErrorHandler = (err, req, res, next) => {
	logError(err, req, res, next);
};

app.use(globalErrorHandler);

// Call all routes
app.use(routes);

app.get('/', async (req, res) => {
	res.send('Welcome to the Api');
});

app.use('/images', express.static(path.join(__dirname, 'src', 'storage')));

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
