/**
 * @param {number} n
 * @return {boolean}
 * 不符合则会成环
 */

 // hash表判断是否成环
var isHappy = function(n) {
    const hash = {}

    let res = 0
    while(res !== 1) {
        res = 0
        while (n !== 0) {
            let num = n % 10
            n = parseInt(n / 10)
            res += (num * num)
        }
        n = res
        if (hash[res] === undefined) {
            hash[res] = 1
        } else {
            return false
        }
    }
    return true
};

// 快慢指针判断是否成环
var isHappy = function(n) {
    let low = n
    let fast = n

    do {
        low = nextValue(low)
        fast = nextValue(fast)
        fast = nextValue(fast)
    } while(low !== fast)

    return low === 1
};

var nextValue = function(n) {
    let res = 0
    while (n !== 0) {
        let num = n % 10
        n = parseInt(n / 10)
        res += (num * num)
    }
    return res
}

console.log(isHappy(19))