function solution(arr) {        
    return arr.length > 1 ? arr.filter(val => val !== Math.min(...arr)) : [-1];    
}