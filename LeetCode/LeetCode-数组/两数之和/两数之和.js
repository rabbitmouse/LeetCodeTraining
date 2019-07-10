/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for (const i in nums) {
        let value = target - nums[i]
        if (map.has(value)) {
            return [Number(map.get(value)) , Number(i)]
        }
        map.set(nums[i], i)
    }
    return []
};

console.log(twoSum([3,3], 6))