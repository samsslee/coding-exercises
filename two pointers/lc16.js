//this question uses two pointers to lower the time complexity from O(n^3) to O(n^2)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumClosest = function(nums, target) {
    let n = nums.length

    nums = nums.sort((a,b)=>a-b)

    let dist = Infinity
    let output = Infinity

    if (n == 3){ return nums[0]+nums[1]+nums[2]}

    for (let i = 0; i<n; i++){
        let lp = i+1
        let rp = n-1

        while (lp<rp){
            let temp = nums[i]+nums[lp]+nums[rp]
            if (temp == target){
                return target
            } else if (temp < target){
                lp++
            } else {
                rp--
            }

            if (dist > Math.abs(temp - target)){
                output = temp
                dist = Math.abs(temp - target)
            }

        }
    }

    return output

};

console.log(threeSumClosest([1,1,1,1], 3))