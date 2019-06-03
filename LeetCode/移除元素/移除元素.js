/**
 * 移除元素
 * 向前覆盖
 */
var removeElement = function(nums, val) {
    var index = 0
    for (const i in nums) {
        if (val != nums[i]) {
            nums[index] = nums[i]
            index++
        }
    }

    return index
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))