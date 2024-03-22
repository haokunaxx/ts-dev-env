class NumArray {
  constructor(public nums: number[]) {}

  sumRange(left: number, right: number): number {
    let res = 0
    for (let i = left; i <= right; i++) {
      res += this.nums[i]
    }
    return res
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
