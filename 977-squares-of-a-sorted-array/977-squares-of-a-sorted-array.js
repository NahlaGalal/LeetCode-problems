/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr = [];
    let res = [];
    let index = 0;
    
    for(let i=0; i<nums.length; i++) {
        let square = nums[i] * nums[i];
        
        
        if(nums[i] < 0) arr.unshift(square);
        else {
            while(arr[index] !== undefined && arr[index] < square) {
                res.push(arr[index]);
                index++;
            }
            res.push(square);
        }
    }
    res = [...res, ...arr.slice(index)]
    
    return res;
};