/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    // Remove white spaces
    s = s.trim();
    
    // Remove sign
    let isPositive = true;
    if(s[0] === '-') isPositive = false
    if(s[0] === '-' || s[0] === '+') s = s.slice(1);
    
    let num = 0;
    
    // Iterate over numbers
    for(let i=0; i<s.length; i++) {
        if(!(/[0-9]/.test(s[i]))) s = s.slice(0, i);
    }
    
    for(let i=0; i<s.length; i++) {
        num += +s[i] * Math.pow(10, s.length - i - 1);
    }
    
    // Put the sign
    if(!isPositive) num = -num;
    
    // Check for limits
    const biggestNum = Math.pow(2, 31)
    if(num > biggestNum - 1) num = biggestNum - 1;
    else if(num < -biggestNum) num = -biggestNum;
    
    return num;
};