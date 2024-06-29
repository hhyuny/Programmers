class Solution {
    public long solution(long n) {
        long answer = 0;
        
        String str = Long.toString(n);
        String[] arr = str.split("");
        long[] longArr = new long[arr.length];
        
        for (int i = 0; i < arr.length; i++) {
            longArr[i] = Long.parseLong(arr[i]);
        }
        
        for (int i = 0; i < longArr.length - 1; i++) {
            for (int j = 0; j < longArr.length - 1; j++) {
                if (longArr[j] < longArr[j + 1]) {
                    long temp = longArr[j];                    
                    longArr[j] = longArr[j + 1];
                    longArr[j + 1] = temp;                    
                }
            }
        }
        
        
        String value = "";
        for (int i = 0; i < longArr.length; i++) {
            value += Long.toString(longArr[i]);
        }
        
        answer = Long.parseLong(value);
        
        
        return answer;
    }
}