/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let lp = 0
    let rp = numbers.length-1
    let sum = numbers[lp] + numbers[rp]

    while (lp < rp && sum != target){
        if (sum < target){
            lp++
        } else if (sum > target){
            rp--
        }
        sum = numbers[lp] + numbers[rp]
    }

    return [lp+1, rp+1]
};