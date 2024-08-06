function solution(array, commands) {
     let answer = [];

    commands.forEach(([num1, num2, num3]) => answer.push(array.slice(num1 - 1, num2).sort((a, b) => a - b)[num3 - 1]));

    return answer;
}