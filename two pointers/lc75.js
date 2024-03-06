/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let nlen = nums.length

    for (let lp = 0; lp<nlen-1; lp++){
        for (let rp = lp+1; rp<nlen; rp++){
            if(nums[lp]>nums[rp]){
                let temp = nums[lp]
                nums[lp] = nums[rp]
                nums[rp] = temp
            }
        }
    }
    console.log(nums)

};

sortColors([2,0,2,1,1,0])