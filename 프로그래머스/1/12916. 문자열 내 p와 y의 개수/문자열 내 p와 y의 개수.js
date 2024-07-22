function solution(s){
    let str = s.toUpperCase();
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "P") {
            count++;
        }
        if (str[i] === "Y") {
            count--;
        }
    }
    
    return count === 0 ? true : false;
}