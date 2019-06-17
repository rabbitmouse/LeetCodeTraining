/*
*   全排列 II
*   标记回溯法 + 去重
*/
var permuteUnique = function(nums) {
    var res = []
    var temp = []
    var flags = Array(nums.length).fill(0)

    nums.sort()
    permuteUniqueSets(nums, flags, temp, res)

    return res
};

var permuteUniqueSets = function(nums, flags, temp, res) {
    if (temp.length == nums.length) {
        //退出条件
        console.log(temp)
        res.push(temp)
    }

    for (var i = 0; i < nums.length; i++) {
        if (flags[i] == 0) {
            if (i != 0 && nums[i] == nums[i - 1] && flags[i - 1] == 0) {
                console.log(temp, "-",i)
                continue
            }
            temp.push(nums[i])
            flags[i] = 1
            permuteUniqueSets(nums, flags.slice(0), temp.slice(0), res)

            //回溯
            temp.pop()
            flags[i] = 0
        }
    }
}

console.log(permuteUnique([2,1,1]))