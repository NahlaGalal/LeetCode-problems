/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false;
    let reverse = +(x.toString().split("").reverse().join(""));
    return x === reverse;
};