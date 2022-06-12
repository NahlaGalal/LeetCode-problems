/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const lastElmIndex = digits.length - 1;
    
    if(digits[lastElmIndex] !== 9) return [...digits.slice(0, lastElmIndex), digits[lastElmIndex]+1];
    
    digits.reverse();
    digits[0] = 10;
    for(let i = 0; i <= lastElmIndex; i++) {
        if(digits[i] === 10) {
            digits[i] = 0;
            if(i === lastElmIndex) {
                digits.push(1);
                break;
            }
            else digits[i+1]++;
        }
    }
    digits.reverse();
    return digits;
};