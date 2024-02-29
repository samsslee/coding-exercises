def maxArea(height):
    h = len(height)
    if h==2:
          return min(height[0],height[1])
     
    lp = 0
    rp = h-1
    maxA = 0

    while lp<rp:
        area = min(height[lp],height[rp])*(rp-lp)
        maxA = max(maxA, area)
        if height[lp]<height[rp]:
            lp+=1
        else:
            rp-=1
    return maxA

result = maxArea([1,8,6,2,5,4,8,3,7])
print (result)

