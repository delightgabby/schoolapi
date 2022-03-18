require("dotenv").config()
const cloudinary = require('cloudinary').v2;

// cloudinary.config({ 
//   cloud_name: process.env.CLOUD_NAME, 
//   api_key: process.env.API_KEY,
//   api_secret: process.API_PASSWORD,
//   secure: true
// });


cloudinary.config({ 
  cloud_name: "dt45m9i0q", 
  api_key: "934851327515913",
  api_secret: "zHkMbIhyg02Mb5LgW3toUxQbe5U",
  secure: true
});




module.exports= cloudinary