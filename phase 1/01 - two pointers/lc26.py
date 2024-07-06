from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        n = len(nums)

        if n<2:
            return n

        lp = 0
        rp = 1

        while rp<n:
            if nums[lp] != nums[rp]:
                lp+=1
                nums[lp] = nums[rp]
            rp+=1
        
        return lp+1