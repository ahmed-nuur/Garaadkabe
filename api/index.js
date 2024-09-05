const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to Database
mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Adjust as needed
  socketTimeoutMS: 45000, // Adjust as needed
})
  .then(() => {
    console.log('Database connection successful 🤞');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process with failure
  });

// Import Routes
// Ensure the correct paths and file names are used
// Uncomment and adjust the authRoutes import as needed
// const authRoutes = require('./routes/authRoutes');
const teacherRoutes = require('./routes/teacherRoutes');  // Ensure teacherRoutes exists
const userRouter = require('./routes/userRouter');        // Ensure userRouter exists and path is correct

// Use Routes
// app.use('/api/auth', authRoutes);  // Uncomment if you have authRoutes
app.use('/api/auth', userRouter);   // Ensure this is pointing to the correct router for authentication
app.use('/api/teachers', teacherRoutes); // Teacher routes should work now

// Error Handling Middleware
app.use(errorHandler);

// Static File Handling for client-side files
app.use('/uploads', express.static('uploads')); // Serve static files from the 'uploads' directory
app.use(express.static(path.join(__dirname, '/client/dist'))); // Serve client build files

// Serve client entry point for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Centralized Error Handler for uncaught errors
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Define the port from environment variables or fallback to 5000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🚀`);
});
