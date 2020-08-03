/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) {
        return 0
    }
    if (haystack.length < needle.length) {
        return -1
    }
    let index = -1
    let i = j = 0
    while (i < haystack.length && j < needle.length) {
        console.log(haystack[i], needle[j])
        if (haystack[i] === needle[j]) {
            if (index === -1) {
                index = i
            }
            j++
        } else {
            i = i - j
            j = 0
            index = -1
        }
        i++
    }

    return j === needle.length ? index : -1
};

console.log(strStr("helllao", "lla"))