/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max = 2147483647, min = -2147483648;
    let reverseX = +((Math.abs(x)).toString().split("").reverse().join(""));
    if(x < 0) reverseX = -reverseX;
    if(reverseX > max || reverseX < min) return 0;
    else return reverseX;
};