/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let nlen = nums.length
    let lp = 0
    let rp = nlen-1
    let output = [-1, -1]

    while (lp <= rp){
        let mid = Math.floor((rp+lp)/2)

        if (target == nums[mid]){
            //expand until you find the range
            let i = mid
            let j = mid
            while(i >= 0 && nums[i] == target){
                i--
            }
            while(j <nlen && nums[j] == target){
                j++
            }
            output = [i+1, j-1]
            return output
        } else if (target < nums[mid]){
            rp = mid -1
        } else {
            lp = mid +1
        }
        console.log(mid)
    }

    return output
};

console.log(searchRange([5,7,7,8,8,10], 8))