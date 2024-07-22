function solution(s){
    let str = s.toUpperCase();
    let countP = 0;
    let countY = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "P") {
            countP++;
        }
        if (str[i] === "Y") {
            countY++;
        }
    }
    
    return countP === countY;
}