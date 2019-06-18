/**
 * @param {string} s
 * @return {boolean}
 */

 // 周期步长检验
var repeatedSubstringPattern = function(s) {
    if (s.length < 2) {
        return false
    }
    for (let len = 1; len <= s.length/2; len++) {
        if (s.length % len > 0) {
            //有余数，一定不为周期串
            continue
        }
        let tag = true
        for (let j = len; j < s.length; j++) {
            if (s[j % len] != s[j]) { //步长=子串长度，依次判断字符是否相等  j - (j % len) = n * len（步长）
                tag = false
                break
            }
        }
        if (tag) {
            return true
        }
    }
    
    return false
};

console.log(repeatedSubstringPattern("abab"))

// 寻找所有可能出现的重复子串，挨个验证
var repeatedSubstringPattern = function(s) {
    if (s.length < 2) {
        return false
    }
    let p = 0
    let q = s.length - 1
    let subs = []

    while(p <= q) {
        s1 = s.substring(0,p+1)
        s2 = s.substring(q,s.length)
        if (s1 == s2) {
            subs.push(s1)
        }
        p++
        q--
    }

    for (const str of subs) {
        let res = true
        for (let i = 0; i < s.length; i += str.length) {
            if (str != s.substring(i, i + str.length)) {
                res = false
                break
            }
        }
        if (res) {
            return true
        }
    }
    
    return false
};