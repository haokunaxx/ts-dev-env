// 一个数组中只有一个数出现了一次，其他的都出现了两次，找出那个只出现一次的数
export const singleNumber = (nums: number[]): number => {
  let eor = 0
  for(const val of nums){
    eor ^= val
  }
  return eor
}

console.log(singleNumber([1,2,3,4,2,3,4]));
console.log(singleNumber([3,5,3,4,6,5,1,3,3,8,4,6,1]));
