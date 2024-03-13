function generate(numRows: number): number[][] {
  return [...Array(numRows)].reduce((prev: number[][], _, index) => {
    if (index === 0) {
      prev.push([1])
      return prev
    }
    const prevItem = prev[prev.length - 1]
    prev.push(
      [...Array(index + 1)].map(
        (_, idx) => (prevItem[idx - 1] || 0) + (prevItem[idx] || 0)
        //如果要去掉 或判断，直接通过 for 循环从 [1, index)
      )
    )
    return prev
  }, [] as number[][])
}

console.log(generate(5))
console.log(generate(1))

/*
  示例 1:
  输入: numRows = 5
  输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

  示例 2:
  输入: numRows = 1
  输出: [[1]]
*/
