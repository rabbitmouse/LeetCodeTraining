/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let row = grid.length
    let col = grid[row - 1].length
    let dp = new Array(row * col);

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            let rows = grid[i];
            let idx = i * col + j
            if (i == 0 && j == 0) {
                dp[idx] = rows[j]
            } else if (i == 0) {
                dp[idx] = dp[i * col + j - 1] + rows[j]
            } else if (j == 0) {
                dp[idx] = dp[(i - 1) * col + j] + rows[j]
            } else {
                dp[idx] = Math.min(dp[i * col + j - 1], dp[(i - 1) * col + j]) + rows[j] 
            }
        }
    }
    return dp[row * col - 1]
};

let grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]
console.log(minPathSum(grid))