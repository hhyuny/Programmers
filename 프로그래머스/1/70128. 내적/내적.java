import java.util.stream.IntStream;

class Solution {
    public int solution(int[] a, int[] b) {                
        return IntStream.rangeClosed(0, a.length - 1).map(i -> a[i] * b[i]).sum();        
    }
}