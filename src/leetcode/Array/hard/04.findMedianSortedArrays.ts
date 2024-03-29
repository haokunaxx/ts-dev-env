function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const arr = concatArr(nums1, nums2)
  const mid = arr.length / 2
  return mid % 1 === 0 ?  (arr[mid-1] + arr[mid])/2 : arr[Math.floor(mid)]
};

function concatArr(num1: number[], num2:number[]):number[]{
  let p = 0,
      q = 0
  const len1 = num1.length,
      len2 = num2.length
  const res: number[] = []
  while(p < len1 || q < len2){
      if(num1[p] === undefined){
          res.push(num2[q++])
      }else if(num2[q] === undefined ){
          res.push(num1[p++])
      }else{
          res.push(num1[p] < num2[q] ? num1[p++] : num2[q++])
      }
  }
  return res
}