function minPathSum(grid: number[][]): number {
  const m = grid[0].length, 
    n = grid.length

  const dp = [...Array(n)].map((_) => Array(m).fill(null))
  dp[0][0] = grid[0][0]

  const getDp = (i: number, j: number): number => {
    let temp = grid[i][j]
    if (dp[i][j] !== null) {
      return dp[i][j]
    }
    if (i === 0) {
      temp += getDp(i, j - 1)
    } else if (j === 0) {
      temp += getDp(i - 1, j)
    } else {
      temp += Math.min(getDp(i, j - 1), getDp(i - 1, j))
    }
    dp[i][j] = temp
    return temp
  }

  const res = getDp(n - 1, m - 1)
  return res
}