//this question uses two pointers to lower the time complexity from O(n^3) to O(n^2)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n = nums.length

    nums = nums.sort((a,b)=>a-b)
    console.log(nums)

    let triplets = new Set([])
    for (let i = 0; i<n; i++){
        let lp = i+1
        let rp = n-1

        while (lp<rp){
            let temp = nums[i]+nums[lp]+nums[rp]

            if(temp==0){
                triplets.add(JSON.stringify([nums[i],nums[lp],nums[rp]]))
                lp++
                rp--
            } else if (temp<0){
                lp++
            } else {
                rp--
            }
        }
    }

    return Array.from(triplets).map(JSON.parse);

};

//console.log(threeSum([-1,0,1,2,-1,-4]))

let test = new Set([])
test.add([1])
test.add([1])
console.log(test)