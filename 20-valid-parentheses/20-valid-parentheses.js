/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    
    for(let ch of s) {
        if(ch === '(' || ch === '[' || ch === '{') arr.push(ch);
        if(ch === ')') {
            if(arr[arr.length - 1] === '(') arr.pop();
            else return false
        }
        if(ch === '}') {
            if(arr[arr.length - 1] === '{') arr.pop();
            else return false
        }
        if(ch === ']') {
            if(arr[arr.length - 1] === '[') arr.pop();
            else return false
        }
    }
    
    return !arr.length;
};