/*
*   全排列
*   标记回溯法
*/
var permute = function(nums) {
    var res = []
    var temp = []
    var flags = Array(nums.length).fill(0)

    permuteSets(nums, flags, temp, res)

    return res
};

var permuteSets = function(nums, flags, temp, res) {
    if (temp.length == nums.length) {
        //退出条件
        console.log(temp)
        res.push(temp)
    }

    for (var i = 0; i < nums.length; i++) {
        if (flags[i] == 0) {
            temp.push(nums[i])
            flags[i] = 1
            permuteSets(nums, flags.slice(0), temp.slice(0), res)

            //回溯
            temp.pop()
            flags[i] = 0
        }
    }

}

console.log(permute([1,2,3]))