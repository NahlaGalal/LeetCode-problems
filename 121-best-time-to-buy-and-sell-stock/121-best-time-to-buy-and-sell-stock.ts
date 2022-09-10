function maxProfit(prices: number[]): number {
    let prev = 100002, next = -1, sum = -1;
    
    for(let i=0; i<prices.length; i++) {
        console.log(prev, next)
        if(prices[i] < prev) {
            sum = Math.max(sum, next - prev);
            prev = prices[i];
            next = prices[i];
        } else if (prices[i] > next){
            next = prices[i];
        }
    }
    
    sum = Math.max(sum, next - prev)
    return sum;
};

/**
1 7 2 1 5 3 6 4 0

prev = 1000000, next = -1
prev = 1, next = 1
prev = 1, next = 7
sum = 6
prev = 2, next = 2
prev = 1, next = 1
prev = 1, next = 5
prev = 1, next = 5
prev = 1, next = 6
prev = 1, next = 6
sum = 6
prev = 0, next = 0
sum = 6
*/