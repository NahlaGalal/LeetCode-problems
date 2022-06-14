/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lastStr = strs[0];
    
    for(let i=1; i<strs.length; i++) {
        let minStr = strs[i].length < lastStr.length ? strs[i] : lastStr;
        let maxStr = strs[i].length < lastStr.length ? lastStr : strs[i];
        
        for(let j=minStr.length; j>=0; j--) {
            if(minStr.slice(0, j) === maxStr.slice(0, j)) {
                lastStr = minStr.slice(0, j);
                break;
            }
        }
    }
    
    return lastStr;
};