// 思路一：短的去重，长的排序 => 遍历
// 思路二：哈希表
// function intersection(nums1: number[], nums2: number[]): number[] {
//   let shortArr = nums1.length > nums2.length ? nums2 : nums1,
//     longArr = nums1.length > nums2.length ? nums1 : nums2
//   shortArr = Array.from(new Set(shortArr)).sort((a, b) => a - b)
//   longArr = longArr.sort((a, b) => a - b)
//   let p = 0,
//     q = 0
//   const helpMap = new Map<number, boolean>(),
//     res:number[] = []
//   while (p < shortArr.length) {
//     if (longArr[q] > shortArr[p]) {
//       p++
//     } else {
//       if (longArr[q] === shortArr[p] && !helpMap.get(longArr[q])) {
//         helpMap.set(longArr[q], true)
//         p++
//         q++
//       }else{
//         q++
//       }
//     }
//   }
//   for(const [key] of helpMap){
//     res.push(key)
//   }
//   return res
// }

function intersection(nums1: number[], nums2: number[]): number[] {
  const res = new Set<number>(),
    hash = new Set<number>()
  for (let i = 0, len = nums1.length; i < len; i++) {
    hash.add(nums1[i])
  }
  for (let i = 0, len = nums2.length; i < len; i++) {
    hash.has(nums2[i]) && res.add(nums2[i])
  }
  return [...res]
}
