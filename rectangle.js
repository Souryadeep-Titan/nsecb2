const QRCode = require('qrcode');

var lenght = 20;
var breadth = 10;
var area = lenght * breadth;



QRCode.toString(`The area of the Rectangle is, ${area}`, {type:'terminal'}, function(err,url){
    try {
        console.log(url);
    } catch (error) {
        console.log(err);
    }
});