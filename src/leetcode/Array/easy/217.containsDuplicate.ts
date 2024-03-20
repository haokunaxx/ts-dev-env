// 思路一：哈希表
// 思路二：排序 + 双指针
// 思路三：排序 + （i 与 i+1项异或）
// 思路三：Set + size/length 判断
// function containsDuplicate(nums: number[]): boolean {
//   const hashMap = new Map<number, number>()
//   let res = false
//   for (let i = 0, len = nums.length; i < len; i++) {
//     if (hashMap.get(nums[i])) {
//       res = true
//       break
//     }
//     hashMap.set(nums[i], 1)
//   }
//   return res
// }

// function containsDuplicate(nums: number[]): boolean {
//   nums = nums.sort((a, b) => a - b)
//   let i = 0,
//     j = 1
//   let res = false
//   while (i < nums.length && j < nums.length) {
//     if (nums[i] === nums[j]) {
//       res = true
//       break
//     }
//     i++
//     j++
//   }
//   return res
// }

// function containsDuplicate(nums: number[]): boolean {
//   if (nums.length === 1) return false;
//   nums = nums.sort((a, b) => a - b)
//   let res = false
//   for (let i = 0, len = nums.length; i < len; i++) {
//     if ((nums[i] ^ nums[i + 1]) === 0) {
//       res = true
//       break
//     }
//   }
//   return res
// }

function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size < nums.length
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))
/*
示例 1：
输入：nums = [1,2,3,1]
输出：true

示例 2：
输入：nums = [1,2,3,4]
输出：false

示例 3：
输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true
*/
