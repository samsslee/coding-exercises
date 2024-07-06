/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lp = 0
    let rp = nums.length -1

    while (lp <=rp){
        let nmid = Math.floor((lp+rp)/2)

        if(nums[nmid] === target){
            return nmid
        }

        //else, figure out which is the sorted side
        if (nums[lp]<= nums[nmid]){ //the left is sorted
            if(nums[lp] <= target && target < nums[nmid]){
                rp = nmid -1 //then target is on the left sorted side
            } else {
                lp = nmid +1
            }
        } else { //the right is sorted
            if(nums[nmid] < target && target <= nums[rp]){
                lp = nmid +1
            } else {
                rp = nmid -1
            }
        }
    }

    return -1
};