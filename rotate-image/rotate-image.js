/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length
    
    for(let i=0; i<Math.floor(n / 2); i++) {
        for(let j=i; j<n - i - 1; j++) {
            let tempIndex = matrix[j][n - i - 1];
            let tempIndex2 = matrix[n - i - 1][n - j - 1]
            let tempIndex3 = matrix[n - j - 1][i];
            
            matrix[j][n - i - 1] = matrix[i][j];
            matrix[n - i - 1][n - j - 1] = tempIndex;
            matrix[n - j - 1][i] = tempIndex2;
            matrix[i][j] = tempIndex3;
        }
    }
};
