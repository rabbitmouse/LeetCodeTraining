/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 贪心算法
 * 找亏得最惨的节点的下一个位置
 * 这个位置一定是一开始备用油最多的，才顶得住后续的消耗
 */
var canCompleteCircuit = function(gas, cost) {
    let spare = 0
    let idx = 0
    let minSpare = 0
    for (let i = 0; i < gas.length; ++i) {
        spare += gas[i] - cost[i]
        if (spare < minSpare) {
            minSpare =spare
            idx = i + 1
        }
    }
    return spare >= 0 ? idx : -1
};

console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))