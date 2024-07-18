function solution(s, n) {
    let arr = s.split("");
    
    let newArr = arr.map((item) => {
    
    if (item !== " ") {
        if (item.charCodeAt() >= 97) {
            if (item.charCodeAt() + n > 122) {
            item = String.fromCharCode(item.charCodeAt() + n - 26);
        } else {
            item = String.fromCharCode(item.charCodeAt() + n);
        }
        } else {
              if (item.charCodeAt() + n > 90) {
            item = String.fromCharCode(item.charCodeAt() + n - 26);
        } else {
            item = String.fromCharCode(item.charCodeAt() + n);
        }
        }
        
        
        
    }
    
    return item;
});
    
    return newArr.join('');
}