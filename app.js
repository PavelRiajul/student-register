const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const StudentsModel = require('./models/students');
const WorksModel = require('./models/works');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'your_jwt_secret_key';

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/student_register_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware for JWT token verification
const authVerifyMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied. Token not provided.' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

// CRUD operations for StudentsModel
// Implement your CRUD operations here for StudentsModel

// CRUD operations for WorksModel with token verification
// Implement your CRUD operations here for WorksModel using authVerifyMiddleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
