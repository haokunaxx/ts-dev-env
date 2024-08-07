/*
  [10,9,2,5,3,7,101,18] 
  分析：
    i = 0: [10] => [10]，长度为1
    i = 1: [10], [9] => [10]或[9]，长度为1
    i = 2: [10], [9], [2] => [10]或[9]或[2]，长度为1
    i = 3: [10], [9], [2], [2, 5] => [2, 5]，长度为2
    i = 4: [10], [9], [2], [3], [2, 5], [2, 3] => [2, 5]或[2, 3]，长度为2
    i = 5: [10], [9], [2], [3], [7], [2, 5], [2, 3], [2, 7], [3, 7], [5, 7], [2, 5, 7], [2, 3, 7] => [2, 5, 7]或[2, 3, 7]，长度为3
    ...
  简化下：
    i = 0:  [10]，长度为1
    i = 1:  [10]或[9]，长度为1
    i = 2:  [10]或[9]或[2]，长度为1
    i = 3:  [2, 5]，长度为2
    i = 4:  [2, 5]或[2, 3]，长度为2
    i = 5:  [2, 5, 7]或[2, 3, 7]，长度为3
  结论：
    针对于第i个元素num[i]，如果[0, i)中间存在比num[i]小的元素num[j]，那么第i个元素的最长子序列就是所有num[j]中最长的一个+1。
  举例：
    对于i=6，101来说
    j = 0, num[j] = 10, 10 < 101, 10对应的最长子序列是[10], 所以 101在 索引为 0 出的最长子序列长度是 2
    j = 1, num[j] = 9, 9 < 101, 9对应的最长子序列是[9], 所以 101在 索引为 1 出的最长子序列长度是 2
    j = 2, num[j] = 2, 2 < 101, 2对应的最长子序列是[2], 所以 101在 索引为 2 出的最长子序列长度是 2
    j = 3, num[j] = 5, 5 < 101, 10对应的最长子序列是[2, 5], 所以 101在 索引为 3 出的最长子序列长度是 3
    j = 4, num[j] = 3, 3 < 101, 10对应的最长子序列是[2, 3], 所以 101在 索引为 4 出的最长子序列长度是 3
    j = 5, num[j] = 7, 7 < 101, 10对应的最长子序列是[2,5,7]或[2,3,7], 所以 101在 索引为 5 出的最长子序列长度是 4
    所以i=6的最长子序列长度是4
*/

function lengthOfLIS(nums: number[]): number {
  const len = nums.length
  let arr:number[] = Array(len).fill(1)
  // let max = 1
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[j] < nums[i]) {
        arr[i] = Math.max(arr[j] + 1, arr[i])
      }
    }
    // max = Math.max(max, arr[i])
  }
  // return max
  return Math.max(...arr)
}


// function lengthOfLIS(nums: number[]): number {
//   const len = nums.length
//   const dp: number[] = [...Array(len)].fill(1)
//   let i = len - 2
//   let max = 1
//   for (; i >= 0; i--) {
//     let j = i + 1
//     while (j < len) {
//       if (nums[i] < nums[j]) {
//         dp[i] = Math.max(dp[j] + 1, dp[i])
//         if(dp[i] > max){
//           break;
//         }
//       }
//       j++
//     }
//     max = Math.max(dp[i], max)
//   }
//   return max
// }

console.time()
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([0,1,0,3,2,3]))
console.log(lengthOfLIS([7,7,7,7,7,7,7]))
console.timeEnd()