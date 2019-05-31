/**
 * 下一个排列
 * 找分界点nums[i] > nums[i - 1], 记录交换位nums[i - 1], 查找分界点后最小一个大于交换位数的下标，交换位置，分界点后进行升序排序。
 */
var nextPermutation = function(nums) {
    var left = 0
    for (var i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            left = i
            var right = i
            var flag = nums[i - 1]
            var min = nums[i]

            for (var j = i; j < nums.length; j++) {
                if (nums[j] > flag && nums[j] <= min) {
                    min = nums[j]
                    right = j
                }
            }
            var temp = nums[right]
            nums[right] = nums[i - 1]
            nums[i - 1] = temp
            console.log(nums,temp)
            break
        }
    }
    for (var l = left, r = nums.length - 1; l < r; l++, r--) {
        var temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
    }
    return nums
};

console.log(nextPermutation([2,3,1,3,3]))