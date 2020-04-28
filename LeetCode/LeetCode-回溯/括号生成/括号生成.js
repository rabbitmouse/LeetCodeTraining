/**
 * @param {number} n
 * @return {string[]}
 * 深度优先
 */
var generateParenthesis = function(n) {
    const res = []
    if (n === 0) {
        return res
    }
    
    dsf('', n, n, res)
    return res
};


var dsf = function(str, left, right, res) {
    // 合法退出
    if (left === 0 && right ===0) {
        res.push(str)
        return
    }
    // 不合法 (剩余‘(’更多，无法成对)
    if (left > right) {
        return
    }

    if (left > 0) {
        const temp = `${str}(`
        dsf(temp, left-1, right, res)
    }
    if (right > 0) {
        const temp =  `${str})`
        dsf(temp, left, right -1, res)
    }
}

console.log(generateParenthesis(3))