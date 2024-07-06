/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let s1len = t.length
    let s2len = s.length
    
    //if s1 is larger than s2, then it won't work
    if (s1len > s2len) {return ""}

    let charMap = {}
    let lp = 0
    let rp = 0
    let countS1Chars = 0
    let minWin = Infinity
    let ans = ""

    //setup map
    for (let i = 0; i < s1len; i++){
        let curr = charMap[t[i]] ? charMap[t[i]] : 0
        charMap[t[i]] = curr+1
    }

    //main loop
    while (rp < s2len){
        //expand window
        if (charMap[s[rp]] !== undefined){
            charMap[s[rp]]--
            if(charMap[s[rp]]>=0){
                countS1Chars++
            }
        }
        
        while(countS1Chars == s1len){
            if(minWin > rp - lp + 1){
                minWin = rp - lp + 1;
                ans = s.substring(lp, rp + 1);
            }

            if (charMap[s[lp]] !== undefined){
                charMap[s[lp]]++
                if(charMap[s[lp]]>0){
                    countS1Chars--
                }
            }
            
            lp++
        }

        rp++
    }
    return ans
};
