/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length == 0) {
        return  0
    }
    let max = 0
    let min = prices[0]
    for (let i = 0; i < prices.length; i++) {
        if (i + 1 >= prices.length) {
            max += prices[i] - min
            break
        }
        if (prices[i] > prices[i + 1]) {
            max += prices[i] - min
            min = prices[i + 1]
        }
    }
    return max
};

console.log(maxProfit([7,1,5,3,6,4]))