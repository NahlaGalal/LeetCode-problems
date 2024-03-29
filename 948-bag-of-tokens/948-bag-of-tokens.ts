function bagOfTokensScore(tokens: number[], power: number): number {
    let score = 0;
    tokens.sort((a, b) => a - b);
    
//     while(tokens.length) {
//         if(power >= tokens[0]) {
//             score++;
//             power -= tokens[0];
//             tokens.shift();
//         } else if(score && tokens.length > 1) {
//             score--;
//             power += tokens[tokens.length - 1];
//             tokens.pop();
//         } else break;
//     }
    
    
    let j = tokens.length - 1;
    for(let i=0; i<=j; i++) {
        if(power >= tokens[i]) {
            score++;
            power -= tokens[i];
        } else if(score && i !== j) {
            score--;
            power += tokens[j];
            j--;
            i--;
        } else break;
    }
    
    return score;
};

/**
100 200 300 400 => 200
200 300 400 => 100 => 1
200 300 => 500 => 0
300 => 300 => 1
 => 0 => 2
*/