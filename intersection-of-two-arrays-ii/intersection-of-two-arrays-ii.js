/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let num2Index = 0;
    let arr = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    for(let i=0; i<nums1.length; i++) {
        if(nums1[i] > nums2[num2Index]) {
            while(nums1[i] > nums2[num2Index]) {
                num2Index++;
            }
        }
        if(nums1[i] === nums2[num2Index]) {
            num2Index++;
            arr.push(nums1[i]);
        }
    }
    
    return arr;
};