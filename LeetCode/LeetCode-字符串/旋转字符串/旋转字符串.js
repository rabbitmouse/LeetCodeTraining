/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */


 // 使用indexOf查找子串
var rotateString = function(A, B) {
    if (A.length == B.length && (A + A).indexOf(B) != -1) {
        return true
    }
    return false
};
 

let A = 'abcde'
let B = 'abced'
console.log(rotateString(A, B))



// 不使用indexOf查找子串
var rotateString = function(A, B) {
    if (A.length != B.length) {
        return false
    }
    if (A.length == 0 && B.length == 0) {
        return true
    }

    B = B.split('')
    let idxs = []
    for (const i in B) {
        if (B[i] == A[0]) {
            idxs.push(i)
        }
    }
    if (idxs.length == 0) {
        return false
    }

    for (let idx of idxs) {
        let res = true
        for (const c of A) {
            if (c != B[idx % B.length]) {
                res = false
                break
            }
            idx++
        }
        if (res == true) {
            return true
        }
    }
    return false
};