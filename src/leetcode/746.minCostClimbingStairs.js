"use strict";
/*
  [10, 15, 20]
  [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
*/
// dp[i] = Math.min(dp[i-1], dp[i-2]) + cost
// 从第i个台阶向上跳的最小花费是从到第i-1个台阶和第i-2个台阶之间的最小花费加上i台阶自身的费用
const minCostClimbingStairs = (cost) => {
    const len = cost.length, dp = Array(len).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1]; //因为计算的是最小的
    for (let i = 2; i < len; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
    }
    return Math.min(dp[len - 1], dp[len - 2]);
};
console.log(minCostClimbingStairs([10, 15, 20]));
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
