/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(!n) return false;
    
    let pow = Math.log2(n) / Math.log2(3);
    let ex = 0.0000000001;
    
    return Math.floor(pow) > pow - ex && Math.floor(pow) < pow + ex;
};