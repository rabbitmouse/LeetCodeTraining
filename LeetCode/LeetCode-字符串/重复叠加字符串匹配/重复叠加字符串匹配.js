/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */

/* 数学运算，最大数是2*A+B
 首先我们应该知道，如果A的长度大于等于B的长度，这时B是A的重复叠加字符串只有两种情况，
第一种就是本身B就是A的子串（比如A = “abcdefg”, B = “bcd”），
第二种就是B是两个A的子串(A = “abcdefg”, B = “efgab”, 2 * A == “abcdefgabcdefg”)。

如果A的长度小于B的长度，这时B是A的重复子串，则A的重复次数不超过 Bsize / Asize + 2。
其中“Bsize / Asize”代表的B串中间A重复的次数，“+2”代表的首尾各添加一个A串。
*/
var repeatedStringMatch = function(A, B) {
    let a = Math.floor(B.length/A.length) + 2;
    let i = 0;
    let s = '';
    while (i<a) {
        s += A;
        i++
        if (s.includes(B)) {
            return i;
        }
    }
    return -1;
};

let A = "a"
let B = "a"
console.log(repeatedStringMatch(A, B))


// 正向强行判断
var repeatedStringMatch = function(A, B) {
    if (A.indexOf(B) != -1) {
        return 1
    }
    let c = 2
    let tag = false
    let s = A.slice(0)
    A = A + s
    
    while(true) {
        if (A.indexOf(B) != -1) {
            tag = true
            break
        }
        if (A.length > B.length * 2) {
            break
        }
        A = A + s
        c++
    }
    
    return tag ? c : -1
};