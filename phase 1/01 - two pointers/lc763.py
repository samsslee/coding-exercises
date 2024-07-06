def partitionLabels(s):
    # find length and do base case
    slen = len(s)
    if slen<=1:
        return [slen]

    # find the last appearance of each letter
    output = []
    letters = set(s)
    last = {}

    for letter in letters:
        last[letter] = s.rindex(letter)

    #define pointers
    lp = 0
    rp = 0

    #main loop
    for i in range(slen):
        cur = s[i]
        rp = max(rp, last[s[i]])
        if i==rp:
            size = rp-lp+1
            output.append(size)
            rp +=1
            lp = rp

    return output

print(partitionLabels('ababcbacadefegdehijhklij'))