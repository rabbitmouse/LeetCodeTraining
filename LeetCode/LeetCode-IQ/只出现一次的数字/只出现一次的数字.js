/**
 * @param {number[]} nums
 * @return {number}
 */
// 按位异或。a ^ 0 = a, a ^ a = 0, a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b
var singleNumber = function(nums) {
    let a = 0
    for (const v of nums) {
        a = a ^ v
    }
    return a
};

console.log(singleNumber([1]))

// 先排序，再循环
var singleNumber = function(nums) {
    nums.sort((a, b)=>{
        return a - b
    })

    let idx = 0
    for (let i = 0; i < nums.length; i += 2) {
        idx = i
        if (i == nums.length - 1) {
            break
        }
        if (nums[i] != nums[i + 1]) {
            break
        }
    }
    return nums[idx]
};