var checkInclusion = function(s1, s2) {
    let s1len = s1.length
    let s2len = s2.length
    
    if (s1len > s2len) { return false }

    let charMap = {}
    let lp = 0
    let rp = 0
    let countS1Chars = 0

    for (let i = 0; i < s1len; i++){
        let curr = charMap[s1[i]] ? charMap[s1[i]] : 0
        charMap[s1[i]] = curr + 1
    }

    while (rp < s2len) {
        if (charMap[s2[rp]] !== undefined) {
            charMap[s2[rp]]--
            if (charMap[s2[rp]] >= 0) {
                countS1Chars++
            }
        }

        if (rp - lp + 1 === s1len) {
            if (countS1Chars === s1len) {
                return true
            }

            if (charMap[s2[lp]] !== undefined) {
                charMap[s2[lp]]++
                if (charMap[s2[lp]] > 0) {
                    countS1Chars--
                }
            }
            
            lp++
        }

        rp++
    }
    return false
};
