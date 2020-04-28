/**
 * @param {string} s
 * @return {boolean}
 * 栈，弹出合法括号
 */
var isValid = function(s) {
    const stack = []
    const hash = {
        '(': 1,
        ')': -1,
        '{': 2,
        '}': -2,
        '[': 3,
        ']': -3,
    }

    for (const v of s) {
        if (v === ')' || v === '}' || v === ']') {
            const top = stack.length > 0 ? stack[stack.length - 1] : undefined
            if (hash[top] + hash[v] === 0) {
                stack.pop()
            } else {
                stack.push(v) 
            }
        } else {
            stack.push(v) 
        }
    }

    return stack.length === 0
};

console.log(isValid('{[]]}'))