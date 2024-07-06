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

//this is the way to do it with actually two pointers according to Eric Programming YT video and not have it looping so many times, 
//but according to the LC running the two of them have comparable times actually.

var sortColors2 = function(nums){

    let nlen = nums.length
    let lp = 0
    let rp = nlen-1
    let cur = 0

    const swap = function(nums, p1, p2){
        let temp = nums[p1]
        nums[p1] = nums[p2]
        nums[p2] = temp
    }

    while(cur <= rp){
        if(nums[cur] == 2){
            swap(nums, rp, cur) //swap the right and current pointers if its a 2 cuz 2 will always need to be moved to the end
            rp--
        } else if(nums[cur] == 1){
            cur++
        } else {
            swap(nums, lp, cur)
            lp++
            cur++
        }
    }

}