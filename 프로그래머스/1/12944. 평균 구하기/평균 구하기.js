function solution(arr) {
   return arr.reduce((accumulator, currentValue, index, arr) => accumulator + currentValue) / arr.length;
}