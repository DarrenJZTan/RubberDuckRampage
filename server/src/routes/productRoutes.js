// AUTH ROUTES FILE
// Import express and router 
const express = require('express'); 
const router = express.Router();

const fileServerUpload = require('../middleware/fileServerUpload');
const productController = require('../controllers/productController');
// Setup routes within export function
module.exports = () => {
  router.get('/', 
    productController.getAllProducts
  );

  router.get('/onsale', 
    productController.getOnSaleProducts
  );

  router.post('/',
    fileServerUpload,
    productController.postProduct
  )

  return router
}