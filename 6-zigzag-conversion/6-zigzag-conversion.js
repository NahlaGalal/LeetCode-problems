/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let first = numRows * 2 - 2;
    let second = 0;
    let str = '';
    if(numRows === 1) return s;
    for(let i=0; i<numRows; i++) {
        let index = i;
        let last = false;
        while(index < s.length) {
            let summation = last ? second : first;
            if(summation) str += s[index];
            index += summation;
            last = !last;
        }
        first -= 2;
        second += 2;
    }
    return str;
};

/**
A   I   Q
B  HJ  PR
C G K O S
DF  LN  T
E   M   U
*/

/**
ABCDEFGHIJKLMNOPQRSTU
012345678901234567890
0 8 16 1 7 9 15 17 2 6 10 14 18 3 5 11 13 19 4 12 20
*/