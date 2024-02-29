/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {

    let slen = s.length;
    if (slen <= 1) {
        return [slen]; // Return an array containing the length of the string
    }

    //find the last appearance of each character
    let letters = new Set(s)
    let last = {}
    let output = []

    for (let letter of letters){
        last[letter] = s.lastIndexOf(letter)
    }
    
    let lp = 0
    let rp = 0

    for (let i = 0; i<slen; i++){
        let curletter = s[i]
        rp = Math.max(rp, last[curletter])
        if (rp == i){
            size = rp-lp+1
            output.push(size)
            rp++
            lp = rp
        }
        
    }

    return output

};

console.log(partitionLabels('ababcbacadefegdehijhklij'))