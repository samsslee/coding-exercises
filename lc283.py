from typing import List

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        if len(nums)<2:
            return
        
        lp = 0
        rp = 0

        while (rp<len(nums)):
            if nums[lp] != 0:
                lp += 1
                rp += 1
            elif nums[rp] == 0:
                rp += 1
            else:
                temp = nums[lp]
                nums[lp] = nums[rp]
                nums[rp] = temp
        print(nums)


solution = Solution()
result = solution.moveZeroes([0,1,0,3,12])