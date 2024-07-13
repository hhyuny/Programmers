function solution(n) {
    let arr = [];
    let count = 0;
    
    while (!(n === 0)) {
        arr[count] = n % 3;
        n = Math.floor(n / 3);
        count++;
    }
    
    return arr.reduce((acc, cur, idx) => acc + 3 ** (arr.length - 1 - idx) * cur, 0);
}