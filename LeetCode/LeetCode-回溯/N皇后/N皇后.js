/**
 * N皇后
 * 标记，回溯
 */
var solveNQueens = function(n) {
    if (n == 1) {
        return [["Q"]]
    }
    var res = []
    var temp = Array(n).fill(Array(n).fill(".").join(''))
    var col = Array(n)
    var lbs = Array(n + n - 1)
    var rbs = Array(n + n - 1)

    solveNQueenSets(n, res, temp, col, lbs, rbs, 0)

    return res
};

var solveNQueenSets = function(n, res, temp, col, lbs, rbs, index) {
    
    //最后一个 添加结果
    if (index == n) {
        res.push(temp)
    }
    
    //循环下一列
    for (var i = 0; i < n; i++) {
        if (col[i] != 1 && lbs[index + i] != 1 && rbs[i - index + n - 1] != 1) {
            //该位置可以摆放
            var row = temp[index]
            var str = replaceS(row, i, "Q")
            temp[index] = replaceS(row, i, "Q")
            col[i] = 1
            lbs[index + i] = 1
            rbs[i - index + n - 1] = 1

            solveNQueenSets(n, res, temp.slice(0), col.slice(0), lbs.slice(0), rbs.slice(0), index + 1)
            //回溯
            col[i] = 0
            lbs[index + i] = 0
            rbs[i - index + n - 1] = 0
            row = temp[index]
            temp[index] = replaceS(row, i, ".")
        } 
    }
}

var replaceS = function(str,index,ch){
    var arr = str.split('')
    arr[index] = ch
    return arr.join('')
}

console.log(solveNQueens(5))
