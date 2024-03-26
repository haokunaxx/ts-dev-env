// cSpell:ignore LVIII,MCMXCIV

/*
  思路一：字典表匹配，优先判断p和 p+1 是否能匹配到特殊的罗马字
  思路二：当前位置对应的罗马字符比下一位小则减去当前位的值，IV => 0 - 1 + 5 = 4
*/
const basicMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}
const specialMap = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
}
function romanToInt(s: string): number {
  let sum = 0
  let p = 0
  const len = s.length
  while (p < len) {
    const specialVal = specialMap[(s[p] + s[p + 1]) as keyof typeof specialMap]
    if (specialVal) {
      sum += specialVal
      p += 2
    } else {
      sum += basicMap[s[p] as keyof typeof basicMap]
      p++
    }
  }
  return sum
}

console.log(romanToInt('III'))
console.log(romanToInt('IV'))
console.log(romanToInt('IX'))
console.log(romanToInt('LVIII'))
console.log(romanToInt('MCMXCIV'))
/*
示例 1:
  输入: s = "III"
  输出: 3
示例 2:
  输入: s = "IV"
  输出: 4
示例 3:
  输入: s = "IX"
  输出: 9
示例 4:
  输入: s = "LVIII"
  输出: 58
  解释: L = 50, V= 5, III = 3.
示例 5:
  输入: s = "MCMXCIV"
  输出: 1994
  解释: M = 1000, CM = 900, XC = 90, IV = 4.
*/


