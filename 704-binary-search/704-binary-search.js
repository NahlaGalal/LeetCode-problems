/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = (min, max, nums, target) => {
    if(min > max) return -1;
    
    const mid = Math.floor((min + max) / 2);
    
    if(nums[mid] === target) return mid;
    else if(nums[mid] > target) return binarySearch(min, mid - 1, nums, target)
    else return binarySearch(mid + 1, max, nums, target);
}

var search = function(nums, target) {
    return binarySearch(0, nums.length, nums, target)
};