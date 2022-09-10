function maxProfit(prices: number[]): number {
    let prev = -1, sum: number[] = [];
    
    for(let i=0; i<prices.length; i++) {
        if(prev !== -1 && i === prices.length - 1) {
            sum.push(prices[i] - prev)
        }
        
        if(prices[i] > prices[i + 1] && prev !== -1) {
            sum.push(prices[i] - prev);
            prev = -1;
        } else if (prices[i] < prices[i + 1] && prev === -1) {
            prev = prices[i]
        }
    }
    
    sum.sort((a, b) => b - a);
    return sum.reduce((a, b) => a + b, 0)
};