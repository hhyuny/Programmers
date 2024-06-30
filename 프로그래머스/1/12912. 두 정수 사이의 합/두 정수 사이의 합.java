class Solution {
    public long solution(int a, int b) {
        long answer = 0;
        
        if (a == b) {
            answer = a;
        } else if (a >= 0 && b >= 0) {            
            if (a < b) {                
                for (int i = a; i <= b; i++) {
                    answer += i;
                }
            } else {
                for (int i = b; i <= a; i++) {
                    answer += i;
                }
            }      
        } else if (a <= 0 && b <= 0) {
            if (Math.abs(a) < Math.abs(b)) {
                for (int i = Math.abs(a); i <= Math.abs(b); i++) {
                    answer += i;                    
                }
                answer = -answer;
            } else {
                for (int i = Math.abs(b); i <= Math.abs(a); i++) {
                    answer += i;
                }
                answer = -answer;
            }
        } else {
            int repeatValue = Math.abs(Math.abs(a) - Math.abs(b));
            if (Math.abs(a) > Math.abs(b)) {
                if (a > 0) {
                    for (int i = 0; i < repeatValue; i++) {
                    answer = answer + a;
                    a--;
                    }
                } else {
                    for (int i = 0; i < repeatValue; i++) {
                    answer = answer + a;
                    a = a + 1;
                    }
                    
                }
            } else {
                if (a > 0) {
                    for (int i = 0; i < repeatValue; i++) {
                    answer = answer + b;
                    b = b + 1;
                    }
                    
                } else {
                    for (int i = 0; i < repeatValue; i++) {
                    answer = answer + b;
                    b--;
                    }                    
                }
            }
        }
        
        
        return answer;
    }
}