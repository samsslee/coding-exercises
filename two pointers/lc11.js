/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let h = height.length
    
    if (h==2) {return Math.min(height[0],height[1])}

    let lp = 0
    let rp = h-1
    let max = 0

    while (lp<rp){
        let area = Math.min(height[rp],height[lp])*(rp-lp)

        max = Math.max(max,area)
        if (height[lp]<height[rp]){
            lp++
        } else{
            rp--
        }

    }

    return max

};