// 字符串操作
// function plusOne(digits: number[]): number[] {
//   return (BigInt(digits.join('')) + BigInt(1)).toString().split('').map(_ => +_)
// };

// 数组操作
function plusOne(digits: number[]): number[] {
  let i
  for (i = digits.length - 1; i >= 0; i--) {
    const temp = digits[i] + 1
    digits[i] = temp === 10 ? 0 : temp
    if (temp < 10) {
      break
    }
  }
  i === -1 && digits.unshift(1)
  return digits
}

console.log(plusOne([1, 2, 3])) // [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])) // [4, 3, 2, 2]
console.log(plusOne([9, 9, 9])) // [1, 0, 0, 0]
console.log(plusOne([0])) // [1]
