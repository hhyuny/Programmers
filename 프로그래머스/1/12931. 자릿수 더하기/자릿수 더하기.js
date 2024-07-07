function solution(n)
{
    let answer = 0;    
    let str = n.toString();
    
    for (let i of str) {
        answer = answer + parseInt(i);
        // answer = answer + Number(i);
    }
    
    return answer
}