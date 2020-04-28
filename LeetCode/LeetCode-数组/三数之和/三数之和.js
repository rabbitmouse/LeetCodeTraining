/**
 * @param {number[]} nums
 * @return {number[][]}
 * 双指针 + 目标指针 （快排）
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b) // 先排序

    const arr = []
    let pre = undefined
    for (let now = 0; now < nums.length; now++) {
        if (nums[now] === pre) {
            // 相同目标直接跳过
            continue
        }
        pre = nums[now]
        let low = now + 1 // 头指针
        let height = nums.length - 1 // 尾指针

        let preL = undefined
        while (low < height) {
            if (preL === nums[low]) {
                low++
                continue
            }
            if (nums[low] + nums[height] + nums[now] > 0) {
                // height 比较强
                height--
            } else if (nums[low] + nums[height] + nums[now] < 0){
                // low 比较强
                preL = nums[low]
                low++
            } else {
                arr.push([nums[low], nums[height], nums[now]])
                // 往中间找剩余组合
                preL = nums[low]
                low ++
                height --
            }
        }
    }
    return arr
};

console.log(threeSum([-2,0,0,2,2]))