const QRCode = require('qrcode');

var a = 285;
var b = 3;
var diff = a/b;



QRCode.toString(`The remainder is, ${diff}`, {type:'terminal'}, function(err,url){
    try {
        console.log(url);
    } catch (error) {
        console.log(err);
    }
});