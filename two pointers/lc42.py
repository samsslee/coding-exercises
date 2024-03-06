def trap(height):

    maxn = height.index(max(height))

    lmax = 0
    sum = 0

    for i in range(lmax, maxn):
        if height[i]>height[lmax]:
            lmax = i
        sum += height[lmax] - height[i]
    
    rmax = len(height)-1

    for i in range(rmax, maxn, -1):
        if height[i]>height[rmax]:
            rmax = i
        sum += height[rmax] - height[i]

    return sum


print(trap([4,2,0,3,2,5]))