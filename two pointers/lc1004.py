class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        lp = 0
        rp = 0
        cmax = 0
        kcount = 0
        nlen = len(nums)

        while rp < nlen:
            if nums[rp] == 0:
                if kcount < k:
                    kcount+=1
                else:
                    while nums[lp] !=0:
                        lp+=1
                    lp+=1
            cmax = max(cmax, (rp-lp+1))
            rp+=1
        
        return cmax
