/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 向前覆盖，尾步填零
 */
var moveZeroes = function(nums) {
    var index = 0
    for (const i in nums) {
        if (nums[i] != 0) {
            nums[index] = nums[i]
            index++
        }
    }
    for (var i = index; i < nums.length; i++) {
        nums[i] = 0
    }
    return nums
};

console.log(moveZeroes([0,1,0,3,12]))