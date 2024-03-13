// function singleNumber(nums: number[]): number {
//   let ret
//   const helpMap = new Map<number, number>()
//   nums.forEach((num) => {
//     helpMap.set(num, helpMap.get(num) ? 2 : 1)
//   })
//   for (const [key, val] of helpMap) {
//     console.log(key,val )
//     if (val === 1) {
//       ret = key
//       break
//     }
//   }
//   return ret as number
// }


//异或，两数一样异或结果为 0，异或满足交换律，即 a^b^c = a^(b^c) = (a^b)^c
function singleNumber(nums: number[]): number {
  let ret = nums[0]
  for (let i = 1, len = nums.length; i < len; i++) {
    ret ^= nums[i]
  }
  return ret
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))

/*
示例 1 ：
输入：nums = [2,2,1]
输出：1

示例 2 ：
输入：nums = [4,1,2,1,2]
输出：4

示例 3 ：
输入：nums = [1]
输出：1

*/
