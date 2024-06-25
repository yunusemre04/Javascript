//type change
var m;
m = "new massage";
var mlen = m.length;
var mlen2 = m.length;
console.log(mlen);
//function
var getAverage = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var total = 0;
    var len = a.length;
    for (var i = 0; i < len; i++) {
        total += a[i];
    }
    var result = total / len;
    return "Numbers average is ".concat(result);
};
console.log(getAverage(62, 45, 85));
