/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zero = nums.findIndex(a => !a);
    if(zero === -1) return;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] && i > zero) {
            [nums[i], nums[zero]] = [nums[zero], nums[i]];
            zero = Math.min(i, zero + 1);
        }
    }
};