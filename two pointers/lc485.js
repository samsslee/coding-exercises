/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    nlen = nums.length
    //base cases
    if(nlen == 1){
        if(nums[0] == 1){
            return 1
        }
        if(nums[0] == 0){
            return 0
        }
    }

    //define pointers
    let lp = 0
    let rp = 0
    let max = 0

    while (rp < nlen){
        if (nums[rp] == 0){
            rp++
            lp = rp
        } else {
            max = Math.max(max, (rp-lp+1))
            rp++
        }
    }

    return max


};
