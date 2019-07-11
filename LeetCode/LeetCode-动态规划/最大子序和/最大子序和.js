/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0
    let ans = - (Math.pow(2, 32) - 1)
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum > ans) {
            ans = sum
        }
        if (sum < 0) {
            sum = 0
        }
    }
    return ans
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))