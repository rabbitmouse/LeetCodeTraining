/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let n = 0
    while(x / 10 !== 0) {
        // 防止下一次溢出（强类型语言Int变量会溢出，js默认使用double）
        if (n > (Math.pow(2, 31) - 1) / 10 || n < (-Math.pow(2, 31)) / 10) {
            return 0
        }
        n = n * 10 + x % 10
        x = parseInt(x / 10) 
    }

    return n
};

console.log(reverse(1534236469))