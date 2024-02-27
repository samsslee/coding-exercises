from typing import List

class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        n = len(nums)

        if(n==1):
            return [nums[0]**2]
    
        sorted = [0] *n

        lp = 0
        rp = n-1
        i = n-1

        while lp<=rp:
            ls = nums[lp]**2
            rs = nums[rp]**2

            if (rs>ls):
                sorted[i] = rs
                rp-=1
            else:
                sorted[i] = ls
                lp+=1

            i-=1
        
        return sorted
    def sortedSquares2(self, nums: List[int]) -> List[int]:
        result = map(lambda x:x**2, nums)
        return sorted(result)

solution = Solution()

# # Calling the twoSum method on the instance
result = solution.sortedSquares2([-4,-1,0,3,5])
print(result)


