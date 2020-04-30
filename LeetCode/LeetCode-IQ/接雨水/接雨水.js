/**
 * @param {number[]} height
 * @return {number}
 * 按列求，动态规划
 */
var trap = function(height) {
    let wather = 0
    let left_max = new Array(height.length).fill(0)
    let right_max = new Array(height.length).fill(0)

    // 左边最高墙的高度
    for (let i = 1; i < height.length; ++i) {
        left_max[i] = Math.max(height[i - 1], left_max[i - 1])
    }
    // 右边最高强的高度
    for (let i = height.length - 2; i >= 0; --i) {
        right_max[i] = Math.max(height[i + 1], right_max[i + 1])
    }
    // 按列求水量
    for (let  i = 1; i < height.length; ++i) {
        if (height[i] < left_max[i] && height[i] < right_max[i]) {
            wather += Math.min(left_max[i], right_max[i]) - height[i]
        }
    }

    return wather
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))