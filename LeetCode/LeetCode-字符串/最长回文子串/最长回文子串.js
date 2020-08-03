/**
 * @param {string} s
 * @return {string}
 * 中心扩散法, index当做回文数中心
 * 时间复杂度：On(N) 控件复杂度On(1)
 */
var longestPalindrome = function(s) {
    let maxStr = ''
    // 长度低于2 直接返回
    if (s.length < 2) {
        return s
    }
    for (let i = 1; i < s.length; ++i) {
        const odd = isPalindrome(s, i, i) //奇数回文
        const even = isPalindrome(s, i-1, i) //偶数回文
        const str = odd.length >= even.length ? odd : even
        // 更新最长回文字符串
        maxStr = maxStr.length >= str.length ? maxStr : str
    }

    return maxStr
};

let isPalindrome = function(s, left, right) {
    //中心扩散法
    while (left >= 0 && right < s.length) {
        if (s[left] === s[right]) {
            left --
            right++
        } else {
            break
        }
    }
    console.log(s, left, right);
    return left + 1 < right ? s.slice(left+1, right) : ''
}

console.log(longestPalindrome('abbac'))