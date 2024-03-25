/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

//sliding window technique. expand window if conditions satisfied, contract window if condition not satisfied
var minSubArrayLen = function(target, nums) {
    let lp = 0
    let rp = 0
    let count = Infinity
    let sum = 0

    while (rp < nums.length){
        console.log(lp, rp)
        sum += nums[rp]

        while (sum >= target){
            count = Math.min(rp-lp+1, count)
            sum -= nums[lp]
            lp++
        }

        rp++

    }
    return count = count == Infinity ? 0 : count

};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))