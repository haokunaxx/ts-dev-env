/*
  [7,1,5,3,6,4]
  [7,6,4,3,1]

  [7,1,5,3,6,4]
  i = 0, dp[i] = 0
  i = 1, dp[i] = 0
  i = 2, dp[i] = 5 - 1 = 4
  i = 3, dp[i] = 3 - 1 = 2
  i = 4, dp[i] = 6 - 1 = 5
  i = 5, dp[i] = 4 - 1 = 3

*/

const maxProfit = (prices: number[]): number => {
  const len = prices.length
  const dp: number[] = Array(len).fill(0)
  for (let i = 1; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (prices[j] > prices[i]) {
        dp[i] = Math.max(dp[i], prices[j] - prices[i])
      }
    }
  }
  return Math.max(...dp)
}
console.time()
console.log(maxProfit([7, 1, 5, 3, 6, 4, ]))
console.log(maxProfit([7, 6, 4, 3, 1]))
console.timeEnd()
// 没有找到最优子结构，或者说是没有找到 dp[i] 与 dp[i-1]两者的关系
// dp[i] = Math.max(dp[i - 1], prices[i] - minPrice)
// dp[i]并非表示第i项作为卖出日的最大收益，而是表示计算到第i项时的卖出能够得到的最大收益（可能不是第i项卖出的）
const optimizedMaxProfit = (prices: number[]): number => {
  const len = prices.length
  const dp: number[] = Array(len).fill(0)
  let minPrice = prices[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], prices[i] - minPrice)
    minPrice = Math.min(minPrice, prices[i])
  }
  return dp[len - 1]
}

console.time()
console.log(optimizedMaxProfit([7, 1, 5, 3, 6, 4, ]))
console.log(optimizedMaxProfit([7, 6, 4, 3, 1]))
console.timeEnd()
