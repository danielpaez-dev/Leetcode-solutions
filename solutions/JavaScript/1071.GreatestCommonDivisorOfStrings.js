var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    } else {
        const lengthGCD = gcd(str1.length, str2.length);
        return str1.slice(0, lengthGCD);
    }
};

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}