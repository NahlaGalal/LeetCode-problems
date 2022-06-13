/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let first = prices[0];
    let second = -1;
    let sum = 0;
    
    for(let i=1; i<prices.length; i++) {
        if(prices[i] < prices[i - 1]) {
            if(second !== -1) sum += second - first;
            first = prices[i];
            second = -1;
        } else {
            second = prices[i];
        }
    }
    
    if(second !== -1) sum += second - first;
    
    return sum;
};