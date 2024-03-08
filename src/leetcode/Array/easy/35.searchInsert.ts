function searchInsert(nums: number[], target: number): number {
  let p = 0,
    q = nums.length - 1
  while (p <= q) {
    const mid = p + ((q - p) >> 1)
    if (nums[mid] >= target) {
      q = mid - 1
    } else {
      p = mid + 1
    }
  }
  return p
}

console.log(searchInsert([1, 3, 5, 6], 5)) //2
console.log(searchInsert([1, 3, 5, 6], 2)) //1
console.log(searchInsert([1, 3, 5, 6], 7)) //4
/*
  1. 二分
  2. 返回值为 第一个大于或者等于target 的索引
*/