// 字符串操作
function plusOne(digits: number[]): number[] {
  return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(_ => +_)
};


// 数组操作