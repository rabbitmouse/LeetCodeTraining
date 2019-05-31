/*
*   寻找数组中心索引
*   蠢办法，从右往左找下标，依次判断左边右边是否相等
*/
var pivotIndex = function(nums) {
    var med = -1
    if (nums.length < 3) {
        return med;
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
        var left = 0
        var rigt = 0
        for (let lf = 0; lf < i; lf++) {
            left += nums[lf]
        }
        for (let rt = i + 1; rt < nums.length; rt++) {
            rigt += nums[rt]
        }
        if (left == rigt) {
            med = i
        }
    }

    return med;
};

console.log(pivotIndex([-1,-1,-1,-1,-1,0]))

/*
*   寻找数组中心索引
*   正确操作，滑窗
*/
var pivotIndex = function (nums) {
    let sumleft = 0;// 中心索引左边和
    let sumright = nums.reduce((x, y) => x + y, 0);// 中心索引右边和
    for (let i = 0; i <= nums.length - 1; i++) {
        const num = nums[i];
        sumright -= num;// 当前元素不计入右边和
        if (sumleft === sumright) {// 判断是否满足中心索引条件
            return i;
        }
        sumleft += num;// 判断下一个元素之前，当前元素计入左边和
    }
    return -1;
};