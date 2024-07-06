# if you put tuples in a set in python, they will be unique
# sets cannot take arrays because they are unhashable

def threeSum(nums):
    triplets = set()
    nums.sort()
    n = len(nums)
    for i in range(n-2):
        lp = i+1
        rp = n-1

        while lp<rp:
            temp = nums[i]+nums[lp]+nums[rp]
            if temp == 0:
                triplets.add((nums[i],nums[lp],nums[rp]))
                lp+=1
                rp-=1
            elif temp<0:
                lp +=1
            else:
                rp -=1
            
    return triplets

threeSum([1,2,3])