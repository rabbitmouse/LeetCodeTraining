/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length == 0) {
        return 0
    }
    let max = 0
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] >= min) {
            max = Math.max(prices[i] - min, max) 
        }
    }
    return max
};

console.log(maxProfit([7,1,5,3,6,4]))