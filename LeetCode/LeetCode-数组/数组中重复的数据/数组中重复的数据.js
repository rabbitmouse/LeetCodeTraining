/*
*   数组中重复的数据
*   借助新数组，判断该值对应下标是否已存在
*/
var findDuplicates = function(nums) {
    var res = []
    var temp = new Array(nums.length);
    for (const i in nums) {
        if (temp[nums[i]-1] == undefined) {
            temp[nums[i]-1] = nums[i]
        } else {
            res.push(nums[i])
        }
    }
    return res
};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))


/*
*   数组中重复的数据
*   在输入数组中用数字的正负来表示该位置所对应数字是否已经出现过
*/
function findDuplicates(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        if (nums[num - 1] > 0) {
            nums[num - 1] *= -1;
        } else {
            result.push(num);
        }
    }
    return result;
};