// //一开始的思路（除去暴力解法和哈希表之外想到的方法）：排序后在条件区间内查找
// function majorityElement(nums: number[]): number {
//   if (nums.length === 1) return nums[0]
//   const len = nums.length,
//     requireCount = Math.floor(len / 2) + 1
//   nums = nums.sort((a, b) => a - b)
//   let p = 0,
//     q = p + 1
//   let res
//   while (p <= nums.length - requireCount) {
//     if (nums[p] === nums[q]) {
//       if (q - p + 1 === requireCount) {
//         res = nums[p]
//         break
//       }
//       q++
//     } else {
//       p = q
//       q++
//     }
//   }
//   return res as number
// }
// 根据题解中的提示进一步优化：Math.floor(n / 2) 必定是多数
// function majorityElement(nums: number[]): number {
//   nums = nums.sort((a, b) => a - b)
//   return nums[Math.floor(nums.length / 2)]
// }

// 来自题解的一个思路
function majorityElement(nums: number[]): number {
  let soldier = nums[0],
    count = 1
  const requireCount = Math.floor(nums.length / 2) + 1
  for (let i = 1, len = nums.length; i < len; i++) {
    if (soldier === nums[i]) {
      count++
    } else {
      if (count === 0) {
        soldier = nums[i]
        count++
      } else {
        count--
      }
    }
  }
  return soldier
}

console.log(majorityElement([3, 2, 3, 3]))
console.log(majorityElement([1]))
console.log(majorityElement([2, 2]))
console.log(majorityElement([1, 2, 3, 3, 3, 3]))
console.log(majorityElement([1, 2, 3, 3, 3]))
console.log(majorityElement([3, 2, 3])) 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))

/*
1.多数需要满足数量大于 n/2 
2.肯定存在一个多数
示例 1：
输入：nums = [3,2,3]
输出：3

示例 2：
输入：nums = [2,2,1,1,1,2,2]
输出：2

*/
