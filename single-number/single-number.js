/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let flag = false;
    for(let i=1; i<nums.length; i++) {
        if(flag) flag = false;
        else {
            flag = true;
            if(nums[i] !== nums[i - 1]) return nums[i - 1];
        }
    }
    return nums[nums.length - 1]
};