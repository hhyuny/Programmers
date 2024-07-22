function solution(absolutes, signs) {    
    // return absolutes.reduce((acc, cur, idx) => acc + (signs[idx] === true ? cur * 1 : cur * (-1)), 0);
    return absolutes.reduce((acc, cur, i) => (signs[i] === true ? acc + cur : acc - cur), 0);
}