function solution(a, b, n) {
    let gainedCola = 0;
while (Math.floor(n / a) > 0) {
  gainedCola += Math.floor(n / a) * b;
  n = Math.floor(n / a) * b + (n % a);
}
    
    return gainedCola;
}