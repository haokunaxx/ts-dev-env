// 一个数组中只有一个数出现了一次，其他的都出现了三次，找出那个只出现一次的数
export const singleNumber = (nums: number[]): number => {
  const obj: Record<string, number> = {}
  let res: number = 0
  for(let i = 0,len = nums.length;i<len;i++){
    console.log(obj,nums[i],obj[nums[i]] || 0)
    obj[nums[i]] = (obj[nums[i]] || 0) + 1
  }
  for(const key in obj){
    if(obj[key] === 1){
      res = +key
      break
    }
  }
  return res
}

console.log(singleNumber([2, 3, 2, 2]))
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]))

/*
    1010010110
 ~  0101101001
 +1 0101101010
 ^  0000000010
*/ 