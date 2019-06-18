/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


 // 优化： 同构代表两个字符串中每个位置上字符在自身第一次出现的索引相同
 var isIsomorphic = function(s, t) {
    let map1 = new Map()
    let map2 = new Map()

    let res = true
    for (const i in s) {
        if (!map1.has(s[i], i)) {
            map1.set(s[i], i)
        }

        if (!map2.has(t[i], i)) {
            map2.set(t[i], i)
        }

        if (map1.get(s[i]) != map2.get(t[i])) {
            res = false
            break
        }
    }
    return res
};

console.log(isIsomorphic("paper", "title"))


// 哈希表记录下标之和
var isIsomorphic = function(s, t) {
    let map1 = new Map()
    let map2 = new Map()

    let res = true
    for (const i in s) {
        let sv = s[i]
        let tv = t[i]

        if (map1.has(sv, i)) {
            let v = map1.get(sv)
            v = v + i
            map1.set(sv, v)
        } else {
            map1.set(sv, i)
        }

        if (map2.has(tv, i)) {
            let v = map2.get(tv)
            v = v + i
            map2.set(tv, v)
        } else {
            map2.set(tv, i)
        }

        if (map1.get(sv) != map2.get(tv)) {
            res = false
            break
        }
    }
    return res
};