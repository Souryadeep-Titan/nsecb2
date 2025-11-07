const QRCode = require('qrcode');

var side = 25;
var area = side * side;



QRCode.toString(`The area of the Square is, ${area}`, {type:'terminal'}, function(err,url){
    try {
        console.log(url);
    } catch (error) {
        console.log(err);
    }
});