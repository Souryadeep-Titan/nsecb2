const QRCode = require('qrcode');

var base = 33;
var  height = 45;
var area = 0.5*base*height;



QRCode.toString(`The area of the Triangle is, ${area}`, {type:'terminal'}, function(err,url){
    try {
        console.log(url);
    } catch (error) {
        console.log(err);
    }
});