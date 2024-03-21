/*
示例 1：
  输入：nums = [0,1,2,4,5,7]
  输出：["0->2","4->5","7"]
  解释：区间范围是：
  [0,2] --> "0->2"
  [4,5] --> "4->5"
  [7,7] --> "7"

示例 2：
  输入：nums = [0,2,3,4,6,8,9]
  输出：["0","2->4","6","8->9"]
  解释：区间范围是：
  [0,0] --> "0"
  [2,4] --> "2->4"
  [6,6] --> "6"
  [8,9] --> "8->9"
*/
// function summaryRanges(nums: number[]): string[] {
//   const len = nums.length
//   if (len === 1) return ['' + nums[0]]
//   const res: string[] = []
//   let p = 0,
//     q = 1
//   while (p < len) {
//     if (nums[q] === nums[p] + (q - p)) {
//       q++
//     } else {
//       if (q - p === 1) {
//         res.push('' + nums[p])
//       } else {
//         res.push(`${nums[p]}->${nums[q - 1]}`)
//       }
//       p = q
//       q++
//     }
//   }
//   return res
// }

function summaryRanges(nums: number[]): string[] {
  const len = nums.length
  const res: string[] = []
  let i = 0
  while (i < len) {
    const low = i
    i++ 
    while(i < len && nums[i] === nums[i-1] + 1){
      i++
    }
    const high = i - 1
    const temp = ['' + nums[low]]
    if(low < high){
      temp.push('->')
      temp.push('' + nums[high])
    }
    res.push(temp.join(''))
  }
  return res
}
console.log(summaryRanges([0, 1, 2, 4, 5, 7]))
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
