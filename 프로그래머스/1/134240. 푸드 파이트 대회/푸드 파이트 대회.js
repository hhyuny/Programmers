function solution(food) {
    let arr = [];

for (let i = 1; i < food.length; i++) {
  let count = food[i] % 2 === 0 ? food[i] / 2 : (food[i] - 1) / 2;
  for (let j = 0; j < count; j++) {
    arr.push(i);
  }
}
    
    return [...arr, 0, ...arr.reverse()].join("");
}