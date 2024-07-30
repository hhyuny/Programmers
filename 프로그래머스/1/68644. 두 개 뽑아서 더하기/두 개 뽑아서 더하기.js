function solution(numbers) {
    let arr = [];
    
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            arr.push(numbers[i] + numbers[j]);
        }
    }

    return arr.filter((element, index) => arr.indexOf(element) === index).sort((a, b) => a - b);
}