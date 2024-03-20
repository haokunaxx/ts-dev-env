// 方法一：问题转移成：求i 到 i + k区间内是否有重复
// 看完题解后发现类似于滑动窗口
// function containsNearbyDuplicate(nums: number[], k: number): boolean {
//   let res = false
//   let p = 0
//   while (p < nums.length - 1) {
//     if (res) break
//     let q = p + 1
//     // 通过 Set 来避免内层内层循环
//     while (q <= p + k && q < nums.length) {
//       if (nums[p] === nums[q]) {
//         res = true
//         break
//       }
//       q++
//     }
//     p++
//   }
//   return res
// }

// 方法二：哈希表
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let res = false
  const map = new Map<number, number>()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map.has(num) && i - (map.get(num) as number) <= k) {
      res = true
      break
    }
    map.set(num, i)
  }
  return res
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))

/*
示例 1：
输入：nums = [1,2,3,1], k = 3
输出：true

示例 2：
输入：nums = [1,0,1,1], k = 1
输出：true

示例 3：
输入：nums = [1,2,3,1,2,3], k = 2
输出：false
*/
