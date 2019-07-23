/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    return fastSort(nums, 0, nums.length - 1)
};

var fastSort = function(nums, l, r) {
    if (l >= r) {
        return nums
    }
    let tag = l
    let start = l
    let end = r
    while (l < r) {
        //tag为起点要先从右边开始找
        while (l < r) {
            if (nums[r] < nums[tag]) {
                break
            } else {
                r--
            }
        }
        while (l < r) {
            if (nums[l] > nums[tag]) {
                break
            } else {
                l++
            }
        }

        if (l < r) {
            nums[l] = nums[l] ^ nums[r]
            nums[r] = nums[l] ^ nums[r]
            nums[l] = nums[l] ^ nums[r]
        }
        
    }
    // tag 归位
    if (tag < l) {
        nums[l] = nums[l] ^ nums[tag]
        nums[tag] = nums[l] ^ nums[tag]
        nums[l] = nums[l] ^ nums[tag]
    }

    //递归
    fastSort(nums, start, l - 1)
    fastSort(nums, l + 1, end)

    return nums
}

console.log(sortArray([5,1,1,2,0,0]))