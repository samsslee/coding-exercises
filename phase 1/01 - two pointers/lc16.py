
def threeSumClosest(nums, target):
    # define base case
    n = len(nums)
    if n==3:
        return sum(nums)
    
    # sort and define temp vars
    nums.sort()
    output = float('inf')
    dist = float('inf')

    for i in range(n-2):
        # define pointers
        lp = i+1
        rp = n-1

        while lp<rp:
            temp = nums[i]+nums[lp]+nums[rp]

            if temp==target:
                return target
            elif temp<target:
                lp+=1
            else:
                rp-=1
            
            curgap = abs(temp-target)
            if (curgap<dist):
                dist = curgap
                output = temp
    return output

print(threeSumClosest([1,1,1,1], 3))