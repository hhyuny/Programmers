import java.util.ArrayList;

class Solution {
    public int solution(int[] numbers) {
        ArrayList<Integer> list = new ArrayList<>();        
        int answer = 0;
        
        for (int i = 0; i < numbers.length; i++) {
            list.add(numbers[i]);
        }
        
        for (int i = 0; i <= 9; i++) {
            if (!(list.contains(i))) {
                answer += i;
            }
        }
        
        return answer;
    }
}