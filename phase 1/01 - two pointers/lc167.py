from typing import List

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
            lp = 0
            rp = len(numbers) - 1
            while lp < rp:
                sum = numbers[lp] + numbers[rp]
                if sum == target:
                     return [lp+1, rp+1]
                elif sum < target:
                    lp += 1
                elif sum > target:
                    rp -= 1

# Creating an instance of the Solution class
solution = Solution()

# # Calling the twoSum method on the instance
result = solution.twoSum([1, 2, 3], 5)
print(result)
