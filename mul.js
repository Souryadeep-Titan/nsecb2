const QRCode = require('qrcode');

var a = 45;
var b = 33;
var mul = a * b;



QRCode.toString(`The product of two numbers is, ${mul}`, {type:'terminal'}, function(err,url){
    try {
        console.log(url);
    } catch (error) {
        console.log(err);
}
});