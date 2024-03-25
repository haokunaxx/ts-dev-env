function thirdMax(nums: number[]): number {
  nums = nums.sort((a, b) => a - b)
  nums = Array.from(new Set(nums))
  if(nums.length < 3){
    return nums.pop() as number
  }
  return nums[nums.length - 3]
};
console.log(thirdMax([3, 2, 1]))
console.log(thirdMax([1, 2]))
console.log(thirdMax([2, 2, 3, 1]))
/*
示例 1：
  输入：[3, 2, 1]
  输出：1
  解释：第三大的数是 1 。
示例 2：
  输入：[1, 2]
  输出：2
  解释：第三大的数不存在, 所以返回最大的数 2 。
示例 3：
  输入：[2, 2, 3, 1]
  输出：1
  解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
  此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
 */