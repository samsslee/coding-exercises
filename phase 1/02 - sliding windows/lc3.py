class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        
        if len(s) == 1:
            return 1
        
        lp = 0
        sSet = set()
        size = 0

        for rp in range(len(s)):
            while s[rp] in sSet:
                sSet.remove(s[lp])
                lp+=1
            
            sSet.add(s[rp])
            size = max(rp-lp+1, size)
        return size
        
