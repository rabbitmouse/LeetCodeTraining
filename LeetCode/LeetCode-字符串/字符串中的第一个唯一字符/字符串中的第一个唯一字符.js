/**
 * @param {string} s
 * @return {number}
 */

 //利用数组，用ASCII码作为下标，记录字符在字符串中最后一次出现的位置
var firstUniqChar = function(s) {
    let li = []
    let arr = s.split('')
    for (const i in arr) {
        li[arr[i].charCodeAt() - 97] = i
    }

    for (const i in arr) {
        let v = arr[i]
        if (li[v.charCodeAt() - 97] == i) {
            return i
        } else {
            li[v.charCodeAt() - 97] = -1
        }
    }

    return -1
};

console.log(firstUniqChar("aa"))


//借用map 存储是否重复出现
var firstUniqChar = function(s) {
    let map = new Map()
    for (const c of s) {
        if (map.has(c)) {
            map.set(c, 0)
        } else {
            map.set(c, 1)
        }
    }

    let arr = s.split('')
    for (const i in arr) {
        if (map.get(arr[i]) == 1) {
            return i
        }
    }

    return -1
};