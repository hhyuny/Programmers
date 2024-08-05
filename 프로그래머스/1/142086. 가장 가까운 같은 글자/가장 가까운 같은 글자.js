function solution(s) {
    let sArr = [...s];
    let answer = [];
    
    sArr.forEach((alphabet, idx) => {
        idx === sArr.indexOf(alphabet) ? answer.push(-1) : answer.push(idx - sArr.slice(0, idx).lastIndexOf(alphabet));
});
    return answer;
}