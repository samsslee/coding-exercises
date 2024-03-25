class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        lp = 0
        rp = 0
        sum = 0
        count = float('inf')

        while (rp < len(nums)):
            sum += nums[rp]
            
            while (target <= sum):
                count = min(rp-lp+1, count)
                sum -= nums[lp]
                lp+=1
            
            rp+=1
        
        return count if count != float('inf') else 0