// AUTH ROUTES FILE
// Import express and router 
const express = require('express'); 
const router = express.Router();

// Import auth modules
const AuthController = require('../controllers/authController');
const AuthPolicy = require('../policies/authPolicy');

// Setup routes within export function
module.exports = () => {
  // AUTH: TEST (GET ALL) ROUTE
  router.get('/users', 
    AuthController.listUsers
  );

  // AUTH: REGISTER (POST) Route
  router.post('/register', 
    AuthPolicy.validateAuth,
    AuthController.register
  );

  // AUTH: LOGIN (POST) Route
  router.post('/login', 
    AuthPolicy.validateAuth,
    AuthController.login
  );

  return router
}