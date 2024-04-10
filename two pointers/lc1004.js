var longestOnes = function(nums, k) {
    let nlen = nums.length

    let lp = 0
    let rp = 0
    let kCounter = 0
    let max = 0

    while (rp < nlen) {
        if (nums[rp] == 0) {
            if (kCounter < k) {
                kCounter++
            } else {
                // Move the left pointer forward until we consume a zero
                while (nums[lp] != 0) {
                    lp++
                }
                lp++ // Move past the zero
            }
        }
        max = Math.max(max, rp - lp + 1)
        rp++
    }

    return max
};
