/*
*   找到所有数组中消失的数字
*   空置数组，将value赋值到value-1处，为空处的下标+1就是缺失的数字
*/
var findDisappearedNumbers = function(nums) {
    var temp = new Array(nums.length)
    var res = []

    for (const i in nums) {
        temp[nums[i]-1] = nums[i]
    }
    console.log(temp)
    for (let j = 0; j < temp.length; j++) {
        console.log("temp = ",temp[j])
        if (temp[j] == undefined) {
            res.push(j + 1)
        } 
    }

    return res
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))