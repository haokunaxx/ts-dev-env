// 通过异或交换两个数
export const swapTwoNum = (num1:number, num2:number): number[] => {
  num1 = num1 ^ num2
  num2 = num1 ^ num2
  num1 = num1 ^ num2
  return [num1, num2]
}


console.log(swapTwoNum(1,2));
console.log(swapTwoNum(1,1));
console.log(swapTwoNum(10,1));
