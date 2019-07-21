require('dotenv').config();
var cloudinary = require('cloudinary').v2;
var fs = require('fs');

// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

cloudinary.uploader.upload('https://res.cloudinary.com/dec7on5qy/image/upload/v1563630264/hamburg.jpg',
    {transformation: [
        {gravity: "auto", height: 1080, width: 1920, crop: "thumb"},
        {height: 800, overlay: "white_r1kryq", opacity: 60, radius: 30, width: 1700, crop: "scale"},
        {width: 1700, overlay: {font_family: "Sawarabi Gothic", font_size: 130, font_weight: "bold", text: "Twitterで話題の%0A「ハンバーガーの日」%0Aについて調べてみた"}, color: "#333", crop: "fit"}
    ]},
    function (err, image) {
        if (err) { console.warn(err); }
        console.log(image.url);
        // console.log(image.public_id);
    });
