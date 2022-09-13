function validUtf8(data: number[]): boolean {
    // const forthBytes = [240, 247];
    // const thirdBytes = [224, 239];
    // const secondBytes = [192, 223];
    // const lastBytes = [128, 191];
    // const firstBytes = [0, 127];
    
    const bytes = [128, 192, 224, 240, 248];
    for(let i = 0; i < data.length; i++) {
        // 1 Byte 
        if(data[i] < bytes[0]) continue;
        // More than 4 bytes OR last bytes
        if(data[i] >= bytes[4] || data[i] < bytes[1]) return false;
        
        const bytesNum = bytes.findIndex(b => data[i] < b);
        if(i + bytesNum > data.length) return false;
        for(let j = +i + 1; j < +i + bytesNum; j++) {
            if(data[j] < bytes[0] || data[j] >= bytes[1]) return false;
        }
        
        i = +i + bytesNum - 1;
        console.log(i, bytesNum)
    }
    
    return true;
};