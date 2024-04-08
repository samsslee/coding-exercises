class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        nlen = len(nums)

        if nlen == 1:
            if nums[0] == 0:
                return 0
            if nums[0] ==1:
                return 1

        lp = 0
        rp = 0
        maxL = 0
        
        while rp < nlen:
            if nums[rp] == 0:
                rp+=1
                lp = rp
            else:
                maxL = max(maxL, (rp-lp+1))
                rp+=1

        return maxL
