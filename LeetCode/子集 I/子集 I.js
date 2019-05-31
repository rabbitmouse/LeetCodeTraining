/*
*   子集 I
*   遍历一遍，每遇到一个新数字，就把前面子集复制一遍加上新数字，再加上当前这个数
*/
var subsets = function(nums) {
    var res = []

    for (const i in nums) {
        var num = nums[i]
        for (const j in res) {
            var temp = res[j].slice(0)
            temp.push(num)
            console.log(temp)
            res.push(temp)
        }
        res.push([num])
        console.log("res:", res)
    }

    res.push([])
    return res
};