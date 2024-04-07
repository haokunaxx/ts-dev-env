function intToRoman(num: number): string {
  const numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const romanArr = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ]
  let res = ''
  for (let i = 0, len = numberArr.length; i < len; i++) {
    while (num >= numberArr[i]) {
      num -= numberArr[i]
      res += romanArr[i]
    }
    i++
  }
  return res
}

/*
示例 1:
  输入: num = 3
  输出: "III"
示例 2:
  输入: num = 4
  输出: "IV"
示例 3:
  输入: num = 9
  输出: "IX"
示例 4:
  输入: num = 58
  输出: "LVIII"
  解释: L = 50, V = 5, III = 3.
示例 5:
  输入: num = 1994
  输出: "MCMXCIV"
  解释: M = 1000, CM = 900, XC = 90, IV = 4.
*/
``