/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * 回溯，剪枝
 */

var combinationSum = function(candidates, target) {
    const res = []
    candidates.sort((a,b)=>a-b)
    dfs(candidates, [], 0, target, res)
    return res
};

var dfs = function(candidates, temp, idx, diff, res) {
    // 正常退出
    if (diff === 0) {
        res.push(temp)
        return
    }
    
    for (let j = idx; j < candidates.length; j++) {
        // 异常退出
        if (diff - candidates[j] < 0) {
            break
        }
        temp.push(candidates[j])
        dfs(candidates, temp.slice(0), j, diff - candidates[j], res)
        // 回溯
        temp.pop()
    }
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * 枚举，剪枝
 */

var combinationSum = function(candidates, target) {
    const res = []
    for (const i in candidates) {
        // 代替回溯
        dfs(candidates, [], i, target, res)
    }
    return res
};

var dfs = function(candidates, temp, idx, diff, res) {
    temp.push(candidates[idx])
    diff = diff - candidates[idx]
    // 正常退出
    if (diff === 0) {
        res.push(temp)
        return
    }
    // 异常退出
    if (diff < 0) {
        return
    }
    for (let j = idx; j < candidates.length; j++) {
        // 枚举
        dfs(candidates, temp.slice(0), j, diff, res)
    }
}

console.log(combinationSum([8,7,4,3], 11))