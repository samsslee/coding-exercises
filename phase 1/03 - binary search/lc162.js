/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    //find the middle one and go to the one that's bigger
    //until you reach either infinitely small end
    let nlen = nums.length
    let nmid = Math.floor(nlen/2)


    if(nlen==1 || nums[0]>nums[1]) {return 0}
    if(nums[nlen-2]<nums[nlen-1]){return nlen-1}
    
    let lp = 0
    let rp = nlen-1
    console.log("hey")
    console.log(nmid)


    while (nmid > 0 && nmid < nlen-1){
        if (nums[nmid] > nums[nmid-1] && nums[nmid] > nums[nmid+1]){
            return nmid
        }

        if (nums[nmid] <= nums[nmid-1]) {
            console.log("one")
            rp = nmid
            nmid = Math.floor(lp+(nmid - lp)/2)
        } else if (nums[nmid] <= nums[nmid+1]) {
            console.log("two")
            lp = nmid
            nmid = Math.floor(nmid+(rp-nmid)/2)
        }

        console.log(nmid, nums[nmid])
    }

};

console.log("fun", findPeakElement([1,2,3,4,3]))