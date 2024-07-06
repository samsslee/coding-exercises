/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    if (nums.length<2){return}

    let lp = 0
    let rp = 1

    while(rp <nums.length){
        if (nums[lp] !=0){
            lp++
            rp++
        } else if (nums[rp] == 0){
            rp++
        } else{
            let temp = nums[lp]
            nums[lp] = nums[rp]
            nums[rp] = temp
        }
    }

};