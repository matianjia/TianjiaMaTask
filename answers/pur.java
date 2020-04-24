import java.util.HashMap;
import java.util.Map;

public class pur {
    public int solution(int[] A，int N){
        Map<Integer,Boolean> map=new HashMap<>();
        long length=N;
        if(length>100000) return -1;

        long sum=0;
        long exp=length*(length+1)/2;
        for(int num:A){
            sum+=num;
            Boolean isThere=map.get(num);
            if(isThere==null){
                map.put(num,true);
            }else{
                return 0;
            }
        }

        return sum==exp?1:0;
    }

}
