/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lp = 0 
    let nlen = nums.length
    let rp = nlen - 1

    if (nums[lp] < nums[rp]) {
        //this is because it is not rotated
        return nums[lp]
    }

    //however all other cases its rotated
    while (lp+1 < rp) { //while they are not beside each other
        let mid = Math.ceil(lp + (rp-lp)/2)
        if (nums[mid] > nums[rp]){
            lp = mid
        } else {
            rp = mid
        }
    }

    return Math.min(nums[lp], nums[rp])

};
