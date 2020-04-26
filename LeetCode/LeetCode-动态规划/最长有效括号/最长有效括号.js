/**
 * @param {character[]} string
 * @return {string}
 */
var longestValidParentheses = function(str) {
    let max = 0
    let dp = new Array(str.length).fill(0)

    for (let i = 0; i< str.length; ++i) {
        if (str[i] === ')') {
            // 前面一个成（）
            if(str[i-1] === '(') {
                dp[i] = (i - 2 > 0 ? dp[i - 2] : 0) + 2 // dp[i] 为当前长度
            } else if (i - dp[i - 1] - 1 >= 0 && str[i - dp[i - 1] - 1] === '('){
                dp[i] = (i - dp[i-1] - 2 >= 0 ? dp[i - dp[i-1] - 2] : 0) + dp[i - 1] + 2
            } 
            max = dp[i] > max ? dp[i] : max
        }
        console.log(dp)
    }
    return max
};

let str = "()(())"
console.log(longestValidParentheses(str))

