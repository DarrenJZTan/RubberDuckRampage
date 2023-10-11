// Import in modules
const { bucket } = require('../config/db');
const debugBucket = require('debug')('app:bucket');
const uuid = require('uuid');
const fs = require('fs');

module.exports = {
  async storageBucketUpload(filename) {
    debugBucket(`Firestore File Name: ${filename}`);
    const storageToken = uuid.v4();

    const serverFilePath = `./public/uploads/${filename}`;
    const options = {
      destination: filename,
      resumable: true,
      validation: 'crc32c',
      metadata: {
        metadata: {
          firebaseStorageDownloadTokens: storageToken 
        },
      }
    };

    fs.access(serverFilePath, fs.F_OK, (err) => {
      if (err) {
        debugBucket(err);
        return({
          message: 'Error occurred in storing file to server'
        });
      } else {
        debugBucket("File Successfully Stored in Server");
      }
    });

    const result = await bucket.upload(serverFilePath, options);
    const bucketName = result[0].metadata.bucket;
    debugBucket(`Bucket Name: ${bucketName}`);
    
    const downloadURL = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filename}?alt=media&token=${storageToken}`;
    console.log(`File Successfully Uploaded to Storage Bucket: ${downloadURL}`)

    fs.unlink(serverFilePath, err => {
      if(err) {
        debugBucket(err);
        return({
          message: 'Error occurred in removing file from temporary local storage'
        });
      } else {
        debugBucket('File in temporary local storage deleted');
      }
    });

    return downloadURL;
  }
}