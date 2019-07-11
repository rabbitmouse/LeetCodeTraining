/**
 * @param {number} N
 * @return {boolean}
 */


 // 动态规划
var divisorGame = function(N) {
    if (N == 1) {
        return false
    }
    let dp = new Array(N + 1)
    dp[1] = 0

    for (let i = 2; i <= N; i++) {
        dp[i] = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0 && dp[i - j] == 0) {
                dp[i] = 1
                break
            }
        }
    }
    return dp[N] == 1
};

console.log(divisorGame(2))

// 数学推导
var divisorGame = function(N) {
    return N % 2 == 0
};