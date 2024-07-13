function solution(n, m) {
    var answer = [];   
    let count = 1;
    
    if (n < m) {
        for (let i = 1; i <= n; i++) {
            if (n % i === 0 && m % i === 0) {
                answer[0] = i;
            }
        }
    } else {
        for (let i = 1; i <= m; i++) {
            if (n % i === 0 && m % i === 0) {
                answer[0] = i;
            }
        }
    }
    
    while (isNaN(answer[1])) {
        if ((n * count) % m === 0) {
            answer[1] = n * count;
        }
        count++;
    }    
    
    return answer;
}