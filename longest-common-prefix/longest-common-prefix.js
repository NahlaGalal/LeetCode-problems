/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let lastStr = strs[0];
    
    for(let i=1; i<strs.length; i++) {
        for(let j=lastStr.length; j>=0; j--) {
            if(lastStr.slice(0, j) === strs[i].slice(0, j)) {
                lastStr = lastStr.slice(0, j);
                break;
            }
        }
    }
    
    return lastStr;
};