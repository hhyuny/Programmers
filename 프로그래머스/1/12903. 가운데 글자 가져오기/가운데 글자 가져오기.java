class Solution {
    public String solution(String s) {
        String answer = "";
        
        if (s.length() % 2 == 0) {
            answer = String.valueOf(s.charAt(s.length() / 2 - 1))
                + String.valueOf(s.charAt(s.length() / 2));            
        } else {
            answer = String.valueOf(s.charAt((s.length() - 1) / 2));            
        }
        
        return answer;
    }
}



// 가장 큰 인덱스를 2로 나눈 값 == (문자열 길이 - 1) / 2
// 짝수: 전체 길이를 2로 나눈 값을 구하고, (그 값 - 1, 값) 이렇게 