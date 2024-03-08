// 没脑子解法
// function removeDuplicates(nums: number[]): number {
//     const helpMap: Map<number, boolean> = new Map()
//     for(let i = 0; i < nums.length; i++){
//       if(helpMap.has(nums[i])){
//         nums.splice(i--, 1)
//         continue
//       }
//       helpMap.set(nums[i], true)
//     }
//     return nums.length
// };

//审题后发现关键信息： ** 有序数组 **，所以可以使用 快慢指针
function removeDuplicates(nums: number[]): number {
  let p = 0,
    q = 1
  while (q < nums.length) {
    if (nums[p] !== nums[q]) {
      p++
      nums[p] = nums[q]
    }
    q++
  }
  return p + 1
}

console.log(removeDuplicates([1, 1, 2]))
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
