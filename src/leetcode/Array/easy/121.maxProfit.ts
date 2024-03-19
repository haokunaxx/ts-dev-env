// 暴力解超时
// function maxProfit_Array(prices: number[]): number {
//   let profit = 0
//   // min = 0
//   for (let i = 0, len = prices.length; i < len; i++) {
//     let j = len - 1
//     // 加不加判断优化不了多少
//     // if (profit && min && prices[i] > min) {
//     //   continue
//     // }
//     // min = prices[i]
//     while (j > i) {
//       if (prices[j] > prices[i]) {
//         const temp = prices[j] - prices[i]
//         profit = profit > temp ? profit : temp
//       }
//       j--
//     }
//   }
//   return profit
// }

// 双指针
// function maxProfit_Array(prices: number[]): number {
//   let profit = 0
//   let p = 0,
//     q = 1,
//     len = prices.length
//   while (p < len && q < len) {
//     if (prices[q] < prices[p]) {
//       p = q
//     } else if (prices[q] > prices[p]) {
//       const temp = prices[q] - prices[p]
//       profit = profit > temp ? profit : temp //getMax
//     }
//     q++
//   }
//   return profit
// }

// 动态规划
function maxProfit_Array(prices: number[]): number {
  const dp = [...Array(prices.length)].fill(0)
  let minPrice = prices[0]
  for (let i = 1, len = dp.length; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice)
    minPrice = Math.min(prices[i], minPrice)
  }
  return dp[dp.length - 1]
}

console.log(maxProfit_Array([7, 1, 5, 3, 6, 4]))
console.log(maxProfit_Array([7, 6, 4, 3, 1]))
console.log(maxProfit_Array([7, 2, 5, 3, 6, 4, 1, 8]))

/*
示例 1：
输入：[7,1,5,3,6,4]
输出：5
解释：在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

示例 2：
输入：prices = [7,6,4,3,1]
输出：0
解释：在这种情况下, 没有交易完成, 所以最大利润为 0。
*/
