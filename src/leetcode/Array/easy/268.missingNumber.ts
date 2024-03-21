// 思路一：排序 + 遍历
// 思路二：哈希表
// 思路三：等差数列求和
// 思路四：异或
// 思路五：原地哈希
// function missingNumber(nums: number[]): number {
//   nums = nums.sort((a, b) => a - b)
//   let res = 0
//   for (let i = 0, len = nums.length + 1; i < len; i++) {
//     if (nums[i] !== i) {
//       res = i
//       break
//     }
//   }
//   return res
// }

// function missingNumber(nums: number[]): number {
//   const len = nums.length
//   const helpMap = new Map<number, boolean>()
//   let res = len
//   for (let i = 0; i < len; i++) {
//     helpMap.set(nums[i], true)
//   }
//   for (let i = 0; i < len; i++) {
//     if (!helpMap.get(i)) {
//       res = i
//       break
//     }
//   }
//   return res
// }

// function missingNumber(nums: number[]): number {
//   const len = nums.length
//   const sum = (len * (len + 1)) / 2
//   let temp = 0
//   for (let i = 0; i < len; i++) temp += nums[i]
//   return sum - temp
// }

// function missingNumber(nums: number[]): number {
//   const len = nums.length
//   let temp = 0
//   for (let i = 0; i <= len; i++) {
//     temp = temp ^ i
//   }

//   for (let i = 0; i < len; i++) {
//     temp = temp ^ nums[i]
//   }
//   return temp
// }

function missingNumber(nums: number[]): number {
  const len = nums.length
  let res = len
  for (let i = 0; i < len; i++) {
    if (nums[i] !== i && nums[i] !== len) {
      //交换
      let temp = nums[i]
      nums[i] = nums[temp]
      nums[temp] = temp
      i--
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] !== i) {
      res = i
      break
    }
  }
  return res
}

console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
console.log(missingNumber([0]))

/*
示例 1：
  输入：nums = [3,0,1]
  输出：2
  解释：n = 3，因为有 3 个数字，所以所有的数字都在范围 [0,3] 内。2 是丢失的数字，因为它没有出现在 nums 中。
示例 2：
  输入：nums = [0,1]
  输出：2
  解释：n = 2，因为有 2 个数字，所以所有的数字都在范围 [0,2] 内。2 是丢失的数字，因为它没有出现在 nums 中。
示例 3：
  输入：nums = [9,6,4,2,3,5,7,0,1]
  输出：8
  解释：n = 9，因为有 9 个数字，所以所有的数字都在范围 [0,9] 内。8 是丢失的数字，因为它没有出现在 nums 中。
示例 4：
  输入：nums = [0]
  输出：1
  解释：n = 1，因为有 1 个数字，所以所有的数字都在范围 [0,1] 内。1 是丢失的数字，因为它没有出现在 nums 中。
*/
