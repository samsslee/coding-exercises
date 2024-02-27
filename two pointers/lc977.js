/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) { //two pointers
    let n = nums.length

    if(n==1){return [nums[0]**2]}

    let sorted = new Array(n).fill(0)

    let lp = 0
    let rp = n-1
    let i = n-1

    while (lp<=rp){
        let ls = nums[lp]**2
        let rs = nums[rp]**2

        if(rs>ls){
            sorted[i] = rs
            rp--
        } else{
            sorted[i] = ls
            lp++
        }

        i--
    }
    return sorted
};


//otherwise using array methods, about the same run time apparently
var sortedSquares2 = function(nums) {
    nums = nums.map(n=>n**2)
    return nums.sort((a,b)=>a-b)
};
