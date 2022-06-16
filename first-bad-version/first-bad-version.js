/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const binarySearch = (min, max, isBadVersion) => {
    if(min === max) return min;
    
    const mid = Math.floor((min + max) / 2);
    
    if(isBadVersion(mid)) return binarySearch(min, mid, isBadVersion)
    else return binarySearch(mid + 1, max, isBadVersion)
}

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        return binarySearch(1, n, isBadVersion)
    };
};

/**
1 2 3 4 5 6 7 8 => 5 is the bad version
5 6 7 8
5 6
5

*/