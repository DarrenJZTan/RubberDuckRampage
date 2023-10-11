const ApiError = require('../utilities/ApiError');
const debugWRITE = require('debug')('app:write');
const path = require('path');

const fileServerUpload = (req, res, next) => {
  if(req.files) {
    const file = req.files.image
    debugWRITE(`Image for server processing: ${file.name}`)

    const filename = Date.now() + '_' + file.name
    debugWRITE(`Unique filename: ${filename}`)
    const uploadPath = path.join(
      __dirname,
      '../../public/uploads/',
      filename
    );

    file
    .mv(uploadPath)
    .then(() => {
      console.log(`Server Upload Successful: ${uploadPath}`);
      res.locals.filename = filename
      next();
    })
    .catch(err => {
      if(err) return next(ApiError.internal('Your file request could not be processed at this time', err));
    })

  } else {
    next();
  }
}

module.exports = fileServerUpload;