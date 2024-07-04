class Solution {
    public int[] solution(int n, int m) {
        int[] answer = new int[2];
        int count = 1;
        
        for (int i = 1; i <= n; i++) {
            if (n % i == 0 && m % i == 0) {
                answer[0] = i;                
            }
        }
        
        while (true) {            
            if ((n * count) % m == 0) {
                answer[1] = n * count;
                break;
            }
            count++;            
        }
        
        return answer;
    }
}