/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

 //倒序相加，拼接字符串，反转
var addStrings = function(num1, num2) {
    let str = []
    let p = num1.length - 1
    let q = num2.length - 1
    let l1 = num1.split('')
    let l2 = num2.split('')
    let carry = 0

    while (p >= 0 || q >= 0 || carry != 0) {
        if (p >= 0) {
            let c = l1[p--]
            carry += c.charCodeAt() - '0'.charCodeAt()
        }
        if (q >= 0) {
            let c = l2[q--]
            carry += c.charCodeAt() - '0'.charCodeAt()
        }
        str.push(carry % 10)
        carry = Math.floor(carry / 10) 
        console.log("str =", str)
    }
    return str.reverse().join('')
};

console.log(addStrings("123", "111"))