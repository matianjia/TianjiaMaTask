                                 
 public void rotate(int[] nums, int n, int k) {
           k %=n;
           reverse(nums, 0, nums.length - 1);
	   reverse(nums, 0, k - 1);
	   reverse(nums, k, nums.length - 1);
	   for(int i=0;i<nums.length;i++){
           System.out.print(i+" ");
        }
	
 }                                                    
                                                        
                                                   
 public void reverse(int[] nums, int m, int n) {        
     while (m < n) {                                    
         int temp = nums[m];                            
         nums[m] = nums[n];                             
         nums[n] = temp;                                
         m++;                                           
         n--;                                           
     }                                                  
 }                                                      
                                                        
		

}
