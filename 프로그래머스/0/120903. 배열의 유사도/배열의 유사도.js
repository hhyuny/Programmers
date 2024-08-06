function solution(s1, s2) {
    let count = 0;
    
    s1.forEach(str => {
        if (s2.includes(str)) count++;
    })
    
    return count;
}