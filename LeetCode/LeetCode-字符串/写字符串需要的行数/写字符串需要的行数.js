/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function(widths, S) {
    let line = 1
    let size = 0
    for (const c of S) {
        size +=  widths[c.charCodeAt() - 97]
        if (size > 100) {
            size = widths[c.charCodeAt() - 97]
            line += 1
        }
    }

    return [line, size]
};

let widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
let S = "abcdefghijklmnopqrstuvwxyz"
console.log(numberOfLines(widths, S))

