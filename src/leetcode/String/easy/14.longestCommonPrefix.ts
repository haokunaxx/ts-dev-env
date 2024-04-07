// cSpell:ignore strs,racecar
function longestCommonPrefix(strs: string[]): string {
  strs = strs.sort((a, b) => a.length - b.length)
  const len = strs.length
  let p = 0,
    res = ''
  while (p < strs[0].length) {
    let i = 1
    for (; i < len;) {
      if (strs[i][p] === strs[0][p]) {
        i++
        continue
      }
      break
    }
    if (i === len) {
      res += strs[0][p]
      p++
    } else {
      break
    }
  }
  return res
}

/*
示例 1：
  输入：strs = ["flower","flow","flight"]
  输出："fl"
示例 2：
  输入：strs = ["dog","racecar","car"]
  输出：""
  解释：输入不存在公共前缀。
*/


console.log(longestCommonPrefix(["flower","flow","flight"]))