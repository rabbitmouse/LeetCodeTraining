/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    const dp = ['1']
    for (let i = 1; i < n; i++) {
        const pre = dp[i - 1]

        let count = 1
        let temp = ''
        for (let p = 0, q = 1; q < pre.length; q++) {
            if (pre[p] === pre[q]) {
                // M个 N
                count += 1
                continue
            } else {
                temp = temp + count + pre[p]
                count = 1
                p = q
            }
        }
        // tail
        temp = temp + count + pre.charAt(pre.length - 1)
        dp.push(temp)
    }

    return dp[n - 1]
};

console.log(countAndSay(4))