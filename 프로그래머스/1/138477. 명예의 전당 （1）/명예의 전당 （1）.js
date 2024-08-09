function solution(k, score) {
    let temp = [];
let answer = [];

for (let i = 0; i < score.length; i++) {
  if (i < k) {
    temp.push(score[i]);
    temp.sort((a, b) => b - a);
    console.log(temp);
    answer[i] = temp[i];
  } else {
    temp.push(score[i]);
    temp.sort((a, b) => b - a);
    temp.pop();
    answer[i] = temp[k - 1];
  }
}
    
    return answer;
}