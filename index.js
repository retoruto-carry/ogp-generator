require('dotenv').config({path: __dirname + "/.env"});
var cloudinary = require('cloudinary').v2;

const commandLineArgs = require('command-line-args');
const optionDefinitions = [
  {
    name: 'image',
    type: String
  },
  {
    name: 'title',
    type: String,
  },
];
const options = commandLineArgs(optionDefinitions);

// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

cloudinary.uploader.upload(options.image,
    {transformation: [
        {gravity: "auto", height: 1080, width: 1920, crop: "thumb"},
        {overlay: "white_box"},
        {width: 1700, overlay: {font_family: "Sawarabi Gothic", font_size: 130, font_weight: "bold", text: options.title}, color: "#333", crop: "fit"}
    ]},
    function (err, image) {
        if (err) { console.warn(err); }
        console.log(image.url);
        // console.log(image.public_id);
    });
