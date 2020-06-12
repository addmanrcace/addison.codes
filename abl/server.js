const express = require('express');
const logger = require('./middleware/logger');
const connectDB = require('./config/db');

// Initialize express
const app = express();

// Connect to database
connectDB();

// Initialize logging middleware
app.use(logger);

// CORS?
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  next();
});

// Middleware for express to parse JSON
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/books'));

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
