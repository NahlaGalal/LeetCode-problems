/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    for (let i=0; i<9; i++) {
        let rowSet = new Set();
        let colSet = new Set();
        
        let lastSizeRow = rowSet.size;
        let lastSizeCol = colSet.size;
        
        for(let j=0; j<9; j++) {
            // Check for columns
            if(board[j][i] !== ".") {
                colSet.add(board[j][i]);
                if(colSet.size === lastSizeCol) return false;
                lastSizeCol = colSet.size;
            }
            
            // Check for rows
            if(board[i][j] !== ".") { 
                rowSet.add(board[i][j]);
                if(rowSet.size === lastSizeRow) return false;
                lastSizeRow = rowSet.size;
            }
            
            // Check for squares
            if(!(i % 3) && !(j % 3)) {
                let squSet = new Set();
                let lastSizeSqu = squSet.size;
                
                for(let k=i; k<i+3; k++) {
                    for(let l=j; l<j+3; l++) {
                        if(board[k][l] !== ".") {
                            squSet.add(board[k][l]);
                            if(squSet.size === lastSizeSqu) return false;
                            lastSizeSqu = squSet.size;
                        }
                    }
                }   
            }
        }
    }

    return true;
};