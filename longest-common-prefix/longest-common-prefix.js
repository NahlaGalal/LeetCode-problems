/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lastStr = strs[0];
    
    for(let i=1; i<strs.length; i++) {
        let minStr = strs[i].length < lastStr.length ? strs[i] : lastStr;
        let maxStr = strs[i].length < lastStr.length ? lastStr : strs[i];
        
        for(let i=minStr.length; i>=0; i--) {
            if(minStr.slice(0, i) === maxStr.slice(0, i)) {
                lastStr = minStr.slice(0, i);
                break;
            }
        }
    }
    
    return lastStr;
};