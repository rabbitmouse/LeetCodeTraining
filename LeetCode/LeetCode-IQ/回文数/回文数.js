/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let a = x
    let b = 0
    while(x > 0) {
        let tail = x % 10
        b = b * 10 + tail
        x = parseInt(x / 10) 
        console.log(b, x)
    }
    
    return a == b
};

console.log(isPalindrome(121))