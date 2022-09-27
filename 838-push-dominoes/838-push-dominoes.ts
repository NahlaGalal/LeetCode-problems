function pushDominoes(dominoes: string): string {
    let arr: [string, number, number][] = [];
        
    // Check for 'R'
    let cnt = 0;
    for(let i=0; i<dominoes.length; i++) {
        let domino = dominoes[i];
        if(domino === 'L') cnt = 0;
        else if(domino === 'R') cnt = 1;
        else if(cnt > 0) cnt++;
        
        arr.push([domino, cnt, 0]);
    }
    
    // check for 'L'
    cnt = 0;
    for(let i=dominoes.length - 1; i>=0; i--) {
        let domino = dominoes[i];
        if(domino === 'R') cnt = 0;
        else if(domino === 'L') cnt = 1;
        else if(cnt > 0)cnt++;
        
        arr[i][2] = cnt;
    }
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i][0] === '.') {
            if(!arr[i][1] && arr[i][2]) arr[i][0] = 'L';
            else if(!arr[i][2] && arr[i][1]) arr[i][0] = 'R';
            else if(arr[i][1] > arr[i][2]) arr[i][0] = 'L';
            else if(arr[i][1] < arr[i][2]) arr[i][0] = 'R';
        } 
    }
    
    return arr.map(el => el[0]).join("")
};

/**
.L.R...LR..L..

0,2
0,1
0,0
1,0
2,4
3,3
4,2
0,1
1,0
2,3
3,2
0,1
0,0
0,0

RR.L

1,0
1,0
2,2
0,1
*/