function solution(array, commands) {
    let answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        answer[i] = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[commands[i][2] - 1];
    }
    
    return answer;
}

// answer[i] = array.slice(commands[i][0] - 1, commands[i][1]).sort()[commands[i][2] - 1];
// sort((a, b) => a - b > 0 ? -1 : 1)[commands[i][2] - 1]