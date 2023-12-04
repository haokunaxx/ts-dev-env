"use strict";
/*
  n = 1: 1
  n = 2: 1-1 | 2
  n = 3: 1-1-1 | 1-2 | 2-1
  n = 4: 2-2 | 1-1-2 | 1-1-1-1 | 1-2-1 | 2-1-1 | 2-1-1
*/
// dp[n] = dp[n-1] + dp[n-2]
const climbStairs = (n) => {
    const dp = Array(n + 1).fill(1);
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
