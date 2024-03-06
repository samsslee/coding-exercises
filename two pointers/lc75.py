def sortColors(nums):
    n = len(nums)

    for i in range(n-1):
        for j in range(i+1, n):
            if nums[i]> nums[j]:
                temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp

    print(nums)