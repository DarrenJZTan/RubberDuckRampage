import api from "../services/api";

// MAIN AXIOS PRODUCT METHODS:
// GET ALL - ProductMenu
function getAll() {
  return api.get('/api/products');
}
// GET ALL ONSALE - ProductSale

// POST - AddProduct

// GET BY ID - ProductDetail

// PUT - EditProduct

// DELETE - ProductDetail

const productService = {
  getAll,
}

export default productService;