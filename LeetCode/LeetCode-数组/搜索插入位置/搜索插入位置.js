/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    return binary(nums, 0, nums.length - 1, target)
};

var binary = function(nums, left, right, target) {
    if (left >= right) {
        return left
    }
    const mid = parseInt((right + left) / 2)
    if (nums[mid] > target) {
        return binary(nums, left, mid, target)
    } else if (nums[mid] < target) {
        return binary(nums, mid+1, right, target)
    } else {
        return mid
    }
}

console.log(searchInsert([1,3,5,6], 2))