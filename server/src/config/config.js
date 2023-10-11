module.exports = {
  // PORT ENVs
  port: process.env.PORT,
  
  // DATABASE ENVs
  db: {
    serviceAccountKey: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    storageBucket: process.env.STORAGE_BUCKET_URL,
  },

  // AUTH ENVs
  authentication: {
    //Application secret for creating a secure web token
    jwtSecret: process.env.JWT_SECRET,
  },

  // Approved CORS root URLs
  corsAllowedOptions: [
    process.env.CORS_WHITELIST_1,
    process.env.CORS_WHITELIST_2
  ]  
}