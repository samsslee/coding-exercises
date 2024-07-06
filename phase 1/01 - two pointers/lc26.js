/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let n = nums.length
    if (n<2) {return n}

    let lp = 0
    let rp = 1

    while(rp < n){
        if(nums[lp]==nums[rp]){
            rp++
        } else{
            nums[lp+1] = nums[rp]
            rp++
            lp++
        }

    }

    return lp+1

};