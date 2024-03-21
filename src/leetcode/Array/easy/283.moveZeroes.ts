/**
 Do not return anything, modify nums in-place instead.
 */
// function moveZeroes(nums: number[]): void {
//   const len = nums.length
//   let p = 0,
//     q = p + 1
//   while(q < len && p< len){
//     if(nums[p]){
//       p++
//       q++
//     }else{
//       if(nums[q]){
//         nums[p] = nums[p] + nums[q]
//         nums[q] = nums[p] - nums[q]
//         nums[p] = nums[p] - nums[q]
//         p++
//         q++
//       }else{
//         q++
//       }
//     }
//   }
// }

function moveZeroes(nums: number[]): void {
  const len = nums.length
  let p = 0,
    q = 0
  for (; q < len; q++) {
    if (nums[q]) {
      nums[p++] = nums[q]
    }
  }
  for (; p < len; p++) {
    nums[p] = 0
  }
}

/*
 示例 1:
  输入: nums = [0,1,0,3,12] => [1,0,0,3,12] => [1, 3, 0, 0, 12]
  输出: [1,3,12,0,0]
示例 2:
  输入: nums = [0]
  输出: [0]
 */
