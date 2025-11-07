const QRCode = require('qrcode');


const side = 8; 


const surfaceArea = 6 * (side ** 2);


QRCode.toString(`The Surface Area of the Cube (side=${side}) is: ${surfaceArea} square units., {type:'terminal'}`, (err, url) => {

    if (err) {
        console.error(err);
        return;
    }
    console.log(url);
});