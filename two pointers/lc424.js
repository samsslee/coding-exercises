/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    
    let lp = 0
    let rp = 0
    let slen = s.length

    let charmap = new Map()

    let maxlen = 0
    let mostfreq = 0

    while (rp < slen){

        //expand the window
        let curr = charmap.get(s[rp]) || 0
        charmap.set(s[rp], curr +1)
        mostfreq = Math.max(mostfreq, charmap.get(s[rp]))

        //shrink window as necessary (ie. if you need to replace more than one k)
        if((rp-lp+1) - mostfreq > k){
            charmap.set(s[lp], charmap.get(s[lp])-1)
            lp++
        }
        maxlen = Math.max(maxlen, rp-lp+1)
        rp++
    }
    return maxlen

};
