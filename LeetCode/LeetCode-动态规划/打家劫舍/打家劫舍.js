/**
 * @param {number[]} nums
 * @return {number}
 */

//动态规划，假设每一个房子都要偷，偷这个房子获得的最大值
var rob = function(nums) {
    if (nums.length == 0) {
        return 0
    }
    if (nums.length == 1) {
        return nums[0]
    }
    let dp = new Array(nums.length)
    dp[0] = nums[0]
    dp[1] = nums[1]
    let max = Math.max(dp[0], dp[1])

    for (let i = 2; i < nums.length; i++) {
        let dpMax = 0
        for (let j = 0; j < i - 1; j++) {
            dpMax = Math.max(dpMax, dp[j])
        }
        dp[i] = nums[i] + dpMax
        max = Math.max(max, dp[i])
    }

    return max
};

console.log(rob([2,7,9,3,1]))

// 动态规划：当前房子可以不偷，当前房子可以获得的最大收益 = max(dp[i-1],dp[i-2]+current)，最后一个位置就是最大值
var rob = function(nums) {
    if (nums.length == 0) {
        return 0
    }
    if (nums.length == 1) {
        return nums[0]
    }
    let dp = new Array(nums.length + 1)
    dp[0] = 0
    dp[1] = nums[0]
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    console.log(dp)
    return dp[nums.length]
};
