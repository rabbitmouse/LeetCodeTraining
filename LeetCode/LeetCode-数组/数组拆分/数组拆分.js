/*
*   数组拆分
*   排序 + 2者之间最小数
*/
var arrayPairSum = function(nums) {
    var n = nums.length/2;
    nums.sort((a, b)=>{
        return a - b;
    })
    var sum = 0;
    for (var i = 0; i < nums.length; i += 2) {
        console.log(nums, nums[i])
        sum += nums[i]
    }
    return sum;
};

console.log(arrayPairSum([-2,-5,2,5,23,-6]))