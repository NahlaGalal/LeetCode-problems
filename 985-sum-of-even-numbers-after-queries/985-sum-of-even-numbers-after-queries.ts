function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
    let sum: number = nums.reduce((prev, cur) => !(cur % 2) ? cur + prev : prev, 0);
    let arr: number[] = [];
    
    for(let query of queries) {
        let prev = nums[query[1]];
        
        nums[query[1]] += query[0];
        let cur = nums[query[1]];
        
        // prev => odd 
        if(prev % 2) {
            // cur => even
            if(!(cur % 2)) {
                sum += cur;
            }
        }
        // prev => even
        else {
            // cur => odd    
            if(cur % 2) {
                sum -= prev;
            }
            // cur => even
            else {
                sum += cur - prev;
            }
        }
        
        arr.push(sum);
    }
    
    return arr;
    
};