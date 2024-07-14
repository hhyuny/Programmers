function solution(s) {
    return s.split(" ").map((item1) => item1.split("").map((item2, idx) => idx % 2 === 0 ? item2.toUpperCase() : item2.toLowerCase()).join('')).join(' ');
}