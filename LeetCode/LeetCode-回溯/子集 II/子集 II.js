/*
*   子集 II
*   回溯法 + 去重
*/

var subsets = function(nums, index, temp, result) {
    //退出条件
    if (index == nums.length) {
        return
    }
    //遍历
    // console.log("index = ", index)
    for (var i = index; i < nums.length; i++) {
        console.log("index = ", index, "i = ", i)
        //去重条件
        if (i > index && nums[i] == nums[i - 1]) {
            continue
        }
        //将新元素添加进临时空间
        temp.push(nums[i])
        //将临时空间中的子集加入结果
        result.push(temp.slice(0))
        //递归一下个
        subsets(nums, i + 1, temp.slice(0), result)
        //回溯
        temp.pop()
    }
}

var subsetsWithDup = function(nums) {
    //排序
    nums.sort()
    //存储变量
    var res = []
    var temp = []

    //辅助函数，原数组，下标，临时空间，结果空间
    subsets(nums, 0, temp, res)
    //默认子集
    res.push([])

    return res
};

console.log(subsetsWithDup([1,2,2]))