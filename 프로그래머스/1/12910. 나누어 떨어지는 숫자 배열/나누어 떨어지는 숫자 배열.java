import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, int divisor) {
        int[] answer;
        
        ArrayList<Integer> list = new ArrayList<>();
        
        for (int value : arr) {
            if (value % divisor == 0) {
                list.add(value);
            }
        }
        
        if (list.size() == 0) {
            answer = new int[]{-1};
        } else {
            answer = new int[list.size()];
            for (int i = 0; i < list.size(); i++) {
                answer[i] = list.get(i);
            }
            Arrays.sort(answer);
        }
        
        return answer;
    }
}
