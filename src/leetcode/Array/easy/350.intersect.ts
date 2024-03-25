function intersect(nums1: number[], nums2: number[]): number[] {
  const longArr = nums1.length > nums2.length ? nums1 : nums2,
    shortArr = nums1.length > nums2.length ? nums2 : nums1

  const helpMap = new Map<number, number>()
  const res: number[] = []
  for (let i = 0; i < longArr.length; i++) {
    if (helpMap.has(longArr[i])) {
      helpMap.set(longArr[i], helpMap.get(longArr[i])! + 1)
    } else {
      helpMap.set(longArr[i], 1)
    }
  }
  for (let i = 0, len = shortArr.length; i < len; i++) {
    const ext = helpMap.get(shortArr[i])
    if (ext) {
      ext === 1 ? helpMap.delete(shortArr[i]) : helpMap.set(shortArr[i], ext - 1);
      res.push(shortArr[i])
    }
  }
  return res
}
console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersect( [2, 1],[1, 2]))


/*
示例 1：
  输入：nums1 = [1,2,2,1], nums2 = [2,2]
  输出：[2,2]

示例 2:
  输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  输出：[4,9]
*/
