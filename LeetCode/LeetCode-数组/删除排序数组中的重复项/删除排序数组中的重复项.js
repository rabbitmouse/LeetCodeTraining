/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    let p = 0
    for (const i in nums) {
        if (nums[i] != nums[p]) {
            nums[++p] = nums[i]
        }
    }
    return p+1
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))