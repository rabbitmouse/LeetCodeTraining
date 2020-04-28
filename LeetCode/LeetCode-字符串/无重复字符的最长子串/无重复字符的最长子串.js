/**
 * @param {string} s
 * @return {number}
 * 滑动窗口：左闭右开
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map()
    let l = 0
    let max = 0
    for (const r in s) {
        const hasKey = map.has(s[r])
        if (hasKey) {
            const v = parseInt(map.get(s[r]))
            l = v >= l ? v + 1 : l
        }
        max = Math.max(max, r - l + 1)
        map.set(s[r], r) //添加新字符和位置
    }
    return max
};
console.log(lengthOfLongestSubstring("abcabcbb"))



