// CENTRAL ROUTE FILE
// Import express and router
const express = require('express'); 
const router = express.Router();

// Import sub-routes
const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes')

module.exports = () => {
  // Test GET Route
  router.get('/', (req, res, next) => {
    res.send('Welcome to the RubberDuck Rampage API');
  });

  // Sub-Routes
  router.use('/auth', authRoutes());

  router.use('/products', productRoutes())

  return router
}