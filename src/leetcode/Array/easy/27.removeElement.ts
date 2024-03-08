// 快慢指针都从左边开始
// function removeElement(nums: number[], val: number): number {
//   let p = 0,
//     q = 0
//   while (q < nums.length) {
//     if (p === q && nums[p] !== val) {
//       p++
//       q++
//       continue
//     }
//     if (nums[q] !== val) {
//       nums[p] = nums[q]
//       p++
//     }
//     q++
//   }
//   return p
// }

// 首尾指针
function removeElement(nums: number[], val: number): number {
  let p = 0,
    q = nums.length - 1
  while (p <= q) {
    if (nums[q] === val) {
      q--
    } else {
      if (nums[p] === val) {
        nums[p] = nums[q]
        q--
      }
      p++
    }
  }
  return p
}

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([3, 3], 3))
console.log(removeElement([1], 1))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
