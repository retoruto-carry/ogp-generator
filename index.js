require('dotenv').config();
var cloudinary = require('cloudinary').v2;
var fs = require('fs');

// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

console.log("** ** ** ** ** ** ** ** ** Uploads ** ** ** ** ** ** ** ** ** **");

cloudinary.uploader.upload('https://res.cloudinary.com/dec7on5qy/image/upload/v1563630264/hamburg.jpg',
    {transformation: [
        {gravity: "auto", height: 1080, width: 1920, crop: "thumb"},
        {height: 800, overlay: "white_r1kryq", opacity: 60, radius: 30, width: 1700, crop: "scale"}
    ]},
    function (err, image) {
        console.log();
        console.log("** Remote Url");
        if (err) { console.warn(err); }
        console.log("* " + image.public_id);
        console.log("* " + image.url);
    });
