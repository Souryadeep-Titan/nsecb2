const QRCode = require('qrcode');


var radius = 7; 


var area = Math.PI * (radius ** 2);



QRCode.toString(`The area of the Circle is: ${area.toFixed(2)}, {type:'terminal'}`, function(err, url){
    if (err) { 
        console.error(err);
    } else {
        console.log(url);
    }
});