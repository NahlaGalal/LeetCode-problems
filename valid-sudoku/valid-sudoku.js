/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Check for rows
    for (let i=0; i<9; i++) {
        let set = new Set();
        for(let j=0; j<9; j++) {
            let lastSize = set.size;
            if(board[i][j] !== ".") { 
                set.add(board[i][j]);
                if(set.size === lastSize) return false;
                lastSize = set.size;
            }
        }
    }
    
    console.log("Rows done")
    
    // Check for columns
    for(let i=0; i<9; i++) {
        let set = new Set();
        for(let j=0; j<9; j++) {
            let lastSize = set.size;
            if(board[j][i] !== ".") {
                set.add(board[j][i]);
                if(set.size === lastSize) return false;
                lastSize = set.size;
            }
        }
    }
    
    console.log("Columns done")
    
    // Check for squares
    for(let i=0; i<9; i+=3) {
        for(let j=0; j<9; j+=3) {
            console.log("Square ", i, j)
        
            let set = new Set();
            let lastSize = set.size;
            for(let k=i; k<i+3; k++) {
                for(let l=j; l<j+3; l++) {
                    if(board[k][l] !== ".") {
                        set.add(board[k][l]);
                        if(set.size === lastSize) return false;
                        lastSize = set.size;
                    }
                }
            }
        }
    }
    
    return true;
};

/**
0 0 0 0 5 0 0 1 0
0 4 0 3 0 0 0 0 0
0 0 0 0 0 3 0 0 1
8 0 0 0 0 0 0 2 0
0 0 2 0 7 0 0 0 0
0 1 5 0 0 0 0 0 0 
0 0 0 0 0 2 0 0 0 
0 2 0 9 0 0 0 0 0
0 0 4 0 0 0 0 0 0
*/