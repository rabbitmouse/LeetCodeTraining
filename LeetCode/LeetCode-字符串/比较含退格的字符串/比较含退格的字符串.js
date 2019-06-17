/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

 //直接遍历退格
 var backspaceCompare = function(S, T) {
    S = deal(S)
    T = deal(T)

    return T == S
};

var deal = function(s) {
    let list = s.split('')
    for (let i = 0; i < list.length; i++) {
        if (list[i] == "#") {
            list.splice(i , 1)
            if (i - 1 >= 0) {
                list.splice(i - 1, 1)
            }
            i = -1
        }
    }
    return list.join('')
}

console.log(backspaceCompare("ab#c","ad#c"))


 //额外空间更新字符串
 var backspaceCompare = function(S, T) {
    let l1 = []
    let l2 = []
    for (const c of S) {
        if (c != '#') {
            l1.push(c)
        } else {
            l1.pop()
        }
    }
    for (const c of T) {
        if (c != '#') {
            l2.push(c)
        } else {
            l2.pop()
        }
    }

    l1 = l1.join('')
    l2 = l2.join('')

    return l1 == l2
};