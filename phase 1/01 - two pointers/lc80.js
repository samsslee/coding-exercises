/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let n = nums.length
    
    if(n<3){return n}

    let lp = 0
    let rp = 1
    let c = 0

    while (rp<n){
        if(nums[lp] == nums[rp] && c ==0){
            c++
            lp++
            nums[lp] = nums[rp] //this is to capture the case where you're at the end and lp+1 isn't the same as the largest number but lp is
        } else if(nums[lp]!=nums[rp]){
            lp++
            nums[lp] = nums[rp]
            c=0
        } 
        rp++
    }
    return lp+1


};
