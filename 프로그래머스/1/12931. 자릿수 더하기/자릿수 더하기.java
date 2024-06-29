import java.util.*;

public class Solution {
    public int solution(int n) {
        int answer = 0;
        String val = Integer.toString(n);        
        
        String[] valArr = val.split("");
        
        int[] intArr = new int[valArr.length];        
        
        for (int i = 0; i < valArr.length; i++) {
            intArr[i] = Integer.parseInt(valArr[i]);            
        }

        for (int i = 0; i < intArr.length; i++) {
            answer += intArr[i];
        }

        return answer;
    }
}