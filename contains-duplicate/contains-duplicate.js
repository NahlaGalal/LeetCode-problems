/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = new Set(nums);
    if(set.size === nums.length) return false;
    else return true;
};