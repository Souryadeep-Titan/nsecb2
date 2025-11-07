const QRCode = require('qrcode');

const PI = Math.PI; 
const radius = 10; 
const circumference = 2 * PI * radius;


QRCode.toString(`The radius of the circle is: ${radius}`);
QRCode.toString(`The calculated circumference is: ${circumference}`);
QRCode.toString(`The circumference rounded to 2 decimal places is: ${circumference.toFixed(2)}`, {type:'terminal'}, function(err, url){
    if (err) { 
        console.error(err);
    } else {
        console.log(url);
    }
});