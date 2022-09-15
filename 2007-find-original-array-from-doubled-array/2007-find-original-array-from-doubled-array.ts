function findOriginalArray(changed: number[]): number[] {
    let freq: number[] = new Array(100001).fill(0);
    for(let elm of changed) freq[elm]++;
    
    changed.sort((a, b) => a - b);
    let arr: number[] = [];
    
    for(let i=0; i<changed.length; i++) {
        const elm = changed[i];
        console.log(elm, freq[elm])
        if(!freq[elm]) continue;
        if(!elm) {
            if(freq[elm] >= 2) {
                arr.push(elm);
                freq[elm]-=2;
                i++;
            } else return [];
        } else {
             if(freq[elm] && freq[elm * 2]) {
                arr.push(elm);
                freq[elm * 2]--;
                freq[elm]--;
            }
            else return [];   
        }
    }
    
    return arr;
};