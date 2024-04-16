/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let llen = letters.length
    
    //base cases
    if (target < letters[0]){
        return letters[0]
    }
    if (target >= letters[llen-1]){
        return letters[0]
    }

    //define pointers
    let lp = 0
    let rp = llen-1

    while(lp+1 < rp){
        let mid = Math.floor((lp+rp)/2)

        if(target < letters[mid]){ // see if there's something smaller that's also bigger
            rp = mid
        } else {
            lp = mid
        }

    }
    
    return letters[lp] <= target ? letters[rp] : letters[lp]

};
