function isValid(s: string): boolean {
  const len = s.length
  if(len < 2){
    return false
  }
  const helpObj = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const arr: string[] = []
  let p = 0
  while (p < len) {
    const c = s[p] as keyof typeof helpObj
    if (!helpObj[c]) {
      arr.push(c)
    } else {
      if (arr[arr.length - 1] !== helpObj[c]) {
        break
      }
      arr.pop()
    }
    p++
  }
  return p === len && arr.length === 0
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('([[}'))
console.log(isValid('(]'))

/*
示例 1：
  输入：s = "()"
  输出：true
示例 2：
  输入：s = "()[]{}"
  输出：true
示例 3：
  输入：s = "(]"
*/
