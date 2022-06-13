/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLocaleLowerCase();
    
    let arr = s.split("").filter((ch) => /[a-z0-9]/.test(ch));
    return arr.join("") === arr.reverse().join("");
};