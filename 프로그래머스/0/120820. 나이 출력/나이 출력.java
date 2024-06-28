class Solution {
    public int solution(int age) {
        int answer = 0;
        int nowYear = 2022;
        
        if (age >= 0 && age <= 120) {
            answer = nowYear - age + 1;
        }
        
        return answer;
    }
}