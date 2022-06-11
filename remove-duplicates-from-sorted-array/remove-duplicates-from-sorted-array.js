/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set();
    let lastSetSize = 0;
    let k = 0;
    
    for(let i = 0; i< nums.length; i++) {
        set.add(nums[i]);
        if(set.size === lastSetSize) {
            let elm = nums[i];
            nums.splice(i, 1);
            i--;
        } else {
            lastSetSize = set.size;
            k++;
        }
    }
    
    return k;
};