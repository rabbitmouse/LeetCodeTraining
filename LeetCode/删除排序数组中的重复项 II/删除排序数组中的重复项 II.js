/*
*   删除排序数组中的重复项 II
*   记录重复的数字
*/
var removeDuplicates = function(nums) {
    var temp;
    for (var i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            if (temp == nums[i]) {
                // 下标i重复
                nums.splice(i,1)
                i --;
            } else {
                // 找到新2次重复
                temp = nums[i]
            }
        }
    }

    return nums;
};

console.log(removeDuplicates([-3,-1,-1,0,0,0,0,0,2]))

/*
*   删除排序数组中的重复项 II
*   直接复制前2位，后面第i位大于前面2位（如果相等则代表连续3个数重复） -> 往前赋值
*/
var removeDuplicates = function(nums) {
    var l = 0
    for (var i = 0; i < nums.length; i++) {
        if (l < 2 || nums[i] > nums[l - 2]) {
            console.log(n,"-",l)
            nums[l++] = nums[i]
        }
    }
    
    return l
};