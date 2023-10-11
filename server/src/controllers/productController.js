const { db } = require('../config/db');
const ApiError = require('../utilities/ApiError');
const { storageBucketUpload } = require('../utilities/bucketServices');
const debugREAD = require('debug')('app:read');
const debugWRITE = require('debug')('app:write');

module.exports = {
  async getAllProducts(req, res, next) {
    try {
      const productRef = db.collection('products');
      const snapshot = await productRef.orderBy("name", "asc").get();
      if (snapshot.empty) {
        return next(ApiError.badRequest('The products you were looking for do not exist'));
      }
      let docs = [];
      snapshot.forEach(doc => {
        docs.push({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          category: doc.data().category,
          price: doc.data().price,
          sizes: doc.data().sizes,
          texture: doc.data().texture,
          onSale: doc.data().onSale,
          isAvailable: doc.data().isAvailable,
          image: doc.data().image,
        });
      })
      res.send(docs);
      
    } catch (err) {
      return next(ApiError.internal('The products have gone missing - sorry!', err))
    }
  },
  async getOnSaleProducts(req, res, next){
    try {
      const productRef = db.collection('products');
      const snapshot = await productRef.where("onSale", "==", "true").orderBy("name", "asc").limit(10).get();

      if (snapshot.empty) {
        return next(ApiError.badRequest('The items you were looking for do not exist'));
      } else {
        let docs = [];
        snapshot.forEach(doc => {
          docs.push({
            id: doc.id,
            name: doc.data().name,
            description: doc.data().description,
            category: doc.data().category,
            price: doc.data().price,
            sizes: doc.data().sizes,
            texture: doc.data().texture,
            onSale: doc.data().onSale,
            isAvailable: doc.data().isAvailable,
            image: doc.data().image,
          });
        });
        res.send(docs);
      }
    } catch(err) {
      return next(ApiError.internal('The items selected could not be found', err));
    }
  }, 

  async postProduct(req, res, next){
    debugWRITE(req.body);
    debugWRITE(req.files);
    debugWRITE(res.locals);

    // SAVE TO CLOUD STORAGE (FILE)
    let downloadURL = null;
    try {
      const filename = res.locals.filename;
      downloadURL = await storageBucketUpload(filename);

    } catch(err) {
      return next(ApiError.internal('An error occurred in uploading image to storage', err))
    }

    // SAVE TO FIRESTORE (ALL DATA)
    try {
      const productRef = db.collection('products');
      const response = await productRef.add({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        price: Number(req.body.price),
        sizes: req.body.sizes,
        texture: req.body.texture,
        onSale: req.body.onSale,
        isAvailable: req.body.isAvailable,
        image: downloadURL
      })
      console.log(`Added Product ID: ${response.id}`);
      res.send(response.id)

    } catch(err){
      return next(ApiError.internal('Your request could not be saved at this time', err))
    }
  }
}