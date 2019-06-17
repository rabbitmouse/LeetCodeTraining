var totalNQueens = function(n) {
    if (n == 1) {
        return 1
    }
    var res = {num:0}
    var col = Array(n)
    var lbs = Array(n + n - 1)
    var rbs = Array(n + n - 1)

    solveNQueenSets(n, res, col, lbs, rbs, 0)

    return res["num"]
};

var solveNQueenSets = function(n, res, col, lbs, rbs, index) {
    
    //最后一个 添加结果
    if (index == n) {
        res["num"] = res["num"] + 1
    }
    
    //循环下一列
    for (var i = 0; i < n; i++) {
        if (col[i] != 1 && lbs[index + i] != 1 && rbs[i - index + n - 1] != 1) {
            //该位置可以摆放
            col[i] = 1
            lbs[index + i] = 1
            rbs[i - index + n - 1] = 1

            solveNQueenSets(n, res, col.slice(0), lbs.slice(0), rbs.slice(0), index + 1)
            //回溯
            col[i] = 0
            lbs[index + i] = 0
            rbs[i - index + n - 1] = 0
        } 
    }
}
console.log(totalNQueens(4))