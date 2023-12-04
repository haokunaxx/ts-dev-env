/*
  [2,7,9,3,1]

  dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]) 
*/

const rob = (nums: number[]): number => {
  const len = nums.length
  const dp = Array(len).fill(1)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[1], nums[0])
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }
  return dp[len - 1]
}
console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
