module.exports = function reverse (n) {
    let str;
    if (n >= 0) {
        str = String(n);
        str = str.split('').reverse().join('');
        return +str;
    } else {
        n = n * (-1);
        str = String(n);
        str = str.split('').reverse().join('');
        str = Number(str);
        return str * (-1);
    }
}
