/*
  合并多个连续区间可以用下面的方法
  export function merge(intervals: number[][]): number[][] {
  const arr: any[] = []
  const result: number[][] = []
  intervals.forEach((interval) => {
    let [l, r] = interval
    for (; l <= r; l++) {
      arr[l] = true
    }
  })
  let temp: number[] = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] && temp.length === 0) {
      temp.push(i)
    }
    if (arr[i] && !arr[i + 1] && temp.length === 1) {
      temp.push(i)
    }
    if (temp.length === 2) {
      result.push(temp)
      temp = []
    }
  }
  return result
}
*/


/*
  思路： 
   1. 排序
   2. 遍历
    temp = [curStart, curEnd]
    有重叠区间。即下一个的 start < curEnd, 当前的和下一个需要合并，通过判断当前的 end 和下一个的 end 确定合并区间
    没有重叠区间，将当前区间添加到结果区间内。
   3. 继续下一个
*/
export function merge(intervals: number[][]): number[][] {
  intervals = intervals.sort((a, b) => a[0] - b[0])
  const result: number[][] = []
  let temp = intervals[0]
  for (let i = 1, len = intervals.length; i < len; i++) {
    if (temp[1] < intervals[i][0]) {
      result.push(temp)
      temp = intervals[i]
      continue
    }
    temp[1] = temp[1] > intervals[i][1] ? temp[1] : intervals[i][1]
  }
  result.push(temp)
  return result
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
  ])
)
