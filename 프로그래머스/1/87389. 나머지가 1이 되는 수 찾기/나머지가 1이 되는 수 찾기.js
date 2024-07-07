function solution(n) {    
    let x = 2;
    
    while (1) {
        if (n % x === 1) {
            break;
        }        
        x++;
    }
    
    return x;
}