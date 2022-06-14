/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Built in function solution
    // return haystack.search(needle);
    
    // Implementation solution
    for(let i=0; i<haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            let flag = false;
            
            for(let j=i, k=0; j<haystack.length, k<needle.length; j++, k++) {
                if(haystack[j] !== needle[k]) {
                    flag = true;
                    break;
                }
            }
            
            if(!flag) return i;
        }
    }
        
    return -1;
};