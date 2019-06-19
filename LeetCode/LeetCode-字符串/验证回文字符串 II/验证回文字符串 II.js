/**
 * @param {string} s
 * @return {boolean}
 */


 //双指针，从左右两端开始验证是否是回文串，若左右两边的字符不相等的时候，选择跳过左边或者右边的一个字符，再去验证一遍
var validPalindrome = function(s) {
    let p = 0
    let q = s.length - 1
    let li = s.split('')

    while (p <= q) {
        if (li[p] != li[q]) {
            let tag1 = false
            let tag2 = false
            // console.log("p =", p, "q =", q, "v1 = ", li[p+1], li[q])
            if (p + 1 <= q) {
                tag1 = validPalind(li.slice(p+1, q+1))
            } 
            if (q - 1 >= p) {
                tag2 = validPalind(li.slice(p, q))
            }
            if (tag1 || tag2) {
                return true
            } else {
                return false
            }
        }
        p++
        q--
    }

    return true
};

var validPalind = function(li) {
    let p = 0
    let q = li.length - 1
    while (p <= q) {
        if (li[p] != li[q]) {
            return false
        }
        p++
        q--
    }
    return true
}

console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"))
