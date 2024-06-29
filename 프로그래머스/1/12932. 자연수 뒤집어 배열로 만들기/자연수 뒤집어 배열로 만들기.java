class Solution {
    public long[] solution(long n) {
        int nlength = String.valueOf(n).length();
        long[] answer = new long[nlength];
        int i = 0;
        
        while (n > 0) {
            answer[i] = n % 10;
            n = n / 10;
            i++;
        }        
        
        return answer;
    }
}