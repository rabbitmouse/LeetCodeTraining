/**
 * @param {number[]} nums
 * @return {number}
 * 排序 跳过相同
 */
var firstMissingPositive = function(nums) {
    let min = 1
    let pre = undefined
    nums.sort((a, b) => a - b)
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 1 || pre === nums[i]) {
            continue
        }
        if (nums[i] !== min) {
            break
        }
        pre = nums[i]
        min++
    }

    return min
};


/**
 * @param {number[]} nums
 * @return {number}
 * 官方：索引标记 时间复杂度On
 */
var firstMissingPositive = function(nums) {
    const len = nums.length
    
    // 最小正整数 > 1的情况
    let contains = 0
    for (let i = 0; i < len; i++) {
        if (nums[i] == 1) {
            contains++;
            break;
          }
    }
    if (contains === 0) {
        return 1
    }
    // [1]
    if (len === 1) {
        return 2
    }


    // 异常情况， 无法处理 5 6 7 8这种序列 会输出2
    // 排出非正整数和大于len的数，标记为1
    for (let i = 0; i < len; i++) {
        if (nums[i] <= 0 || nums[i] > len) {
            nums[i] = 1
        }
    }

    // 用值去映射索引位置
    for (let i = 0; i < len; i++) {
        const v = Math.abs(nums[i])
        if (v !== len) {
            nums[v] = -Math.abs(nums[v])
        } else {
            // 第0位代替长度位置
            nums[0] = -Math.abs(nums[0])
        }
    }

    // 从第一位开始找 非负数下标则为第一个缺失的数
    for (let i = 1; i < len; i++) {
        if (nums[i] > 0) {
            return i
        }
    }

    // 范围内正整数 不超过len [1, 2, 0]
    if (nums[0] > 0) {
        return len
    }

    return len + 1 // [2, 1]
};

console.log(firstMissingPositive([1,2,0]))

3 4 1 1 1 5 1 1 2 1

3 -4 -1 -1 -1 -5 1 1 2 1

3 4 1 -1 