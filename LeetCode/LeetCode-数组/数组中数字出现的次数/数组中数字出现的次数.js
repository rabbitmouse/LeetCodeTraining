/**
 * @param {number[]} nums
 * @return {number[]}
 * 使用了map 空间复杂度 On  时间复杂度On
 */
var singleNumbers = function(nums) {
    const map = new Map()

    for (const v of nums) {
        if (map.has(v)) {
            map.delete(v)
        } else {
            map.set(v, 1)
        }
    }

    const res = []
    for (const key of map.keys()) {
        res.push(key)
    } 
    return res
};


/**
 * @param {number[]} nums
 * @return {number[]}
 * 异或 空间复杂度 O1  时间复杂度On
 * 1> 异或位相同为0 不同的2个数一定有1位不为0
 * 2> &1 相同为1 不同为0 找到不同的第一位1（不相同的那一位）
 * 3> 通过那一位将原数组分为2类，得到不同的2个数
 */
var singleNumbers = function(nums) {
    // 1>
    const rsum = nums.reduce((a, b)=> {
        return a ^ b
    })
    // 2>
    let tag = 1
    while ((rsum & tag) === 0) {
        tag = tag << 1 //比较下一位
    }
    // 3>
    let a = 0
    let b = 0
    for (const v of nums) {
        if ((v & tag) === 0) {
            console.log('aaa', v)
            a = a ^ v
        } else {
            console.log('bbb', v)
            b = b ^ v
        }
    }

    return [a, b]
};

console.log(singleNumbers([1,2,10,4,1,4,3,3]))

1010
0010
1000