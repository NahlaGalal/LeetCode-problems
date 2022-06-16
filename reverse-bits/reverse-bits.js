/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let num = 0;
    let bit = 31;
    
    while(bit >= 0) {
        if(n & 1) 
            num += Math.pow(2, bit);
        
        bit--;
        n = n >> 1;
    }
    
    return num;
};