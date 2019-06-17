/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let maxV = S.length
    let minV = 0
    let arr = []

    for (const c of S) {
        if (c == 'I') {
            arr.push(minV)
            minV++
        } else {
            arr.push(maxV)
            maxV--
        }
    }
    arr.push(maxV)

    return arr
};

console.log(diStringMatch('IDID'))