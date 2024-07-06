/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    //base cases
    let n = arr.length
    if (n == k){return arr}

    //if target is to the left or right of the array
    if (x <= arr[0]){ return arr.slice(0,(k))}
    if (x >= arr[n-1]){return arr.slice(n-k)}

    let lp = 0
    let rp = n-k

    while(lp<rp){
        let mid = Math.floor((lp+rp)/2)
        if(x - arr[mid] > arr[mid + k] - x){
            lp = mid + 1;
        }else{
            rp = mid;
        }
    }

    return arr.slice(lp, lp+k)
};