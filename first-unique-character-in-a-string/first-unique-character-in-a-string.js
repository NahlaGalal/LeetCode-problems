/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let frequencyObj = {};
    
    for(let ch of s) {
        if(!frequencyObj[ch]) frequencyObj[ch] = 1;
        else frequencyObj[ch]++;
    }
    
    for(let i in s) {
        if(frequencyObj[s[i]] === 1) return i;
    }
    
    return -1;
};