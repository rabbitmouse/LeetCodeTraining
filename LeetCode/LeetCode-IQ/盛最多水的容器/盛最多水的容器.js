/**
 * @param {number[]} height
 * @return {number}
 * 双指针，默认宽度最大
 */
var maxArea = function(height) {
    let max = 0
    let p = 0
    let q = height.length - 1

    while (p < q) {
        const h = (q - p) * Math.min(height[p], height[q])
        max = Math.max(max, h)
        if (height[p] > height[q]) {
            q--
        } else {
            p++
        }
    }

    return max
};

console.log(maxArea([]))