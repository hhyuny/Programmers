function solution(absolutes, signs) {    
    return absolutes.reduce((acc, cur, idx) => acc + (signs[idx] === true ? cur * 1 : cur * (-1)), 0);
}