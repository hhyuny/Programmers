function solution(numbers) {
    let sum = 0;
    
    numbers.forEach(item => sum = sum + item)
    
    return sum / numbers.length;

}