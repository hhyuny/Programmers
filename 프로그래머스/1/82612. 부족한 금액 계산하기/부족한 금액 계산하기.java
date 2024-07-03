class Solution {
    public long solution(int price, int money, int count) {
        long answer = 0;
        long sum = 0;
        
        for (int i = 0; i <= count; i++) {
            sum = sum + price * i;
        }       
        
        answer = sum >= money ? sum - money : 0;

        return answer;
    }
}