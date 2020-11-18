/**
 * @param {number} numRows
 * @return {number[][]}
 * 错位相加
 * 11 = 10 + 1
 * 121 = 11 * 10 + 11
 * 1331 = 121 * 10 + 121
 */
var generate = function(numRows) {
    if (numRows < 1) {
        return []
    }
    const res = [[1]]
    for (let i = 1; i < numRows; ++i) {
        let pre = [...res[i - 1], 0]
        let next = [0, ...res[i - 1]]
        let zip =  zipArray(pre, next)
        res.push(zip)
    }
    return res
};

var zipArray = function(arr1, arr2) {
    const res = []
    for (let i = 0; i < arr1.length; ++i) {
        res.push(arr1[i] + arr2[i])
    }
    return res
}

console.log(generate(6))