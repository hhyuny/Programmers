function solution(arr, divisor) {
    let answer = arr.filter(val => val % divisor === 0).sort((a, b) => a - b);
    return answer.length > 0 ? answer : [-1];
    
    
}


// 빈 배열이면 길이가 0임. 길이가 0이면 -1을 배열에 담아서 반환