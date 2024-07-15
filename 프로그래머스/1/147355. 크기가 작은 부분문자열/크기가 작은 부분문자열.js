function solution(t, p) {
    let arr = [];
    let count = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        arr[i] = t.substring(i, i + p.length);
    }
    
    for (let val of arr) {
        if (val * 1 <= p * 1) {
            count++;
        }
    }
    
    return count;
}