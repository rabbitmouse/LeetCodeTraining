/*
*   二维数组搜索
*   分制法
*/

var searchMatrix = function(matrix, target) {
    if (matrix.length == 0) {
        return false
    }
    var res = false
    var row = matrix[0]
    var col = row.length

    
    for (let i = 0, j = col - 1; i < matrix.length && j >= 0; ) {

        console.log("i = ", i, "j =", j, "len =", matrix.length)

        var v = matrix[i][j]
        console.log("v = ", v)

        if (v == target) {
            res = true
            break
        } else if (target < v) {
            j--
        } else {
            i++
        }
    }

    console.log(res)
    return res
};

console.log(searchMatrix([[1]], 3))

/*
*   二维数组搜索
*   暴力遍历
*/
var searchMatrix = function(matrix, target) {
    if (matrix.length == 0) {
        return false
    }
    var res = false
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i]; j++) {
            if (target == matrix[i][j]) {
                res = true
            }
        }
    }

    return res
};

console.log(searchMatrix([[1]], 3))