/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let cnt = 0;
    if(n >= 2147483648) {
        cnt = 1;
        n -= 2147483648;
    }
    
    while(n > 0) {
        if(n & 1) cnt++;
        n = n >> 1;
    }
    
    return cnt;
};