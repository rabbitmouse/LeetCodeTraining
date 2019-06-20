/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let p = num1.length - 1
    let q = num2.length - 1
    let res = new Array(p + q + 2).fill(0)
    let l1 = num1.split('')
    let l2 = num2.split('')
    let carry = 0

    // 每一位存储不进位的结果
    for (let i = p; i >=0; i--) {
        for (let j = q; j >= 0; j--) {
            let n1 = num2[j].charCodeAt() - 48
            let n2 = num1[i].charCodeAt() - 48
            let v = res[i + j + 1]
            res[i + j + 1] = v + n1 * n2
        }
    }
    // console.log(res)
    // 处理进位
    for (let i = p + q + 1; i >= 0 ; i--) {
        let v = res[i]
        carry = v + carry
        res[i] = carry % 10
        carry = Math.floor(carry / 10) 
    }

    //处理前面的0
    let count = 0
    for (let i = 0; i < res.length -1 ; i++) {
        let v = res[i]
        if (v == 0) {
            count += 1
        } else {
            break
        }
    }
    // 结果数组
    let list = []
    for (let i = count; i < res.length; i++) {
        list.push(res[i])
    }

    return list.join('')
};

console.log(multiply("18", "18"))