/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let max = 0

    for (let i = 0; i<height.length; i++){
        if(height[i]> height[max]){
            max = i
        }
    }

    let sum = 0
    let lmax = 0

    for (let i = lmax; i<max; i++){
        if (height[i]>height[lmax]){
            lmax = i
        }
        sum += height[lmax] - height[i]
    }

    let rmax = height.length-1
    for (let i = rmax; i>max; i--){
        if (height[i]>height[rmax]){
            rmax = i
        }
        sum +=height[rmax] - height[i]
    }

    return sum
};

console.log(trap([4,2,0,3,2,5]));