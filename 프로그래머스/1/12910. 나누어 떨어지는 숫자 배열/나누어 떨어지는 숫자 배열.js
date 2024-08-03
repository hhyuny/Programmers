function solution(arr, divisor) {
    let DividedByFiveList = arr.filter(num => num % divisor === 0).sort((a, b) => a - b)
    return DividedByFiveList.length >= 1 ? DividedByFiveList : [-1]
    // let answer = arr.filter(val => val % divisor === 0).sort((a, b) => a - b);
    // return answer.length > 0 ? answer : [-1];   
}