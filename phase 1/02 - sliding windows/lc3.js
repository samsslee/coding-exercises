/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //base case
    if (s.length == 1){return 1}
    
    let sSet = new Set([])
    let lp = 0
    let size = 0


    for (let rp = 0; rp<s.length; rp++){
        while(sSet.has(s[rp])){
            sSet.delete(s[lp])
            lp++
        }
        
        sSet.add(s[rp])
        size = Math.max(rp-lp+1, size)
    }

    return size

};