/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let res = []
    for (let i = 1; i < 10; i++) {
        if (i <= n) {
            res.push(i)
            addNums(res, n, i)
        } else {
            break;
        }
    }
    return res
};

var addNums = function(res, n, v) {
    v = v * 10;
    for (let i = 0; i < 10; i++) {
        if (v <= n) {
            res.push(v)
            addNums(res, n, v)
            v += 1
        } else {
            return
        }
    }
}