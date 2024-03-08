// function twoSum(nums: number[], target: number): number[] {
//   let result: number[] | null = null
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i]
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === complement) {
//         result = [i, j]
//         break
//       }
//     }
//     if (result) {
//       break
//     }
//   }
//   return result as number[]
// }

function twoSum(nums: number[], target: number): number[] {
  const helpMap: Map<number, number> = new Map()
  let resArr: number[] = []
  for (let i = 0; i < nums.length; i++) {
    const index = helpMap.get(target - nums[i])
    if (index !== undefined) {
      resArr = [i, index]
      break
    }
    helpMap.set(nums[i], i)
  }
  return resArr
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
console.log(twoSum([0, 4, 3, 0], 0))
console.log(twoSum([-1, -2, -3, -4, -5], -8))
