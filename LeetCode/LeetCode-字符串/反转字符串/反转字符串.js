/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let p = 0
    let q = s.length - 1

    while (p <= q) {
        let temp = null
        temp = s[q]
        s[q] = s[p]
        s[p] = temp
        p++
        q--
    }

    return s
};

console.log(reverseString("Hannah".split('')))