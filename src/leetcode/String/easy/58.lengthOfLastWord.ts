function lengthOfLastWord(s: string): number {
  s = s.trim()
  const len = s.length
  let p = len - 1
  let res = 0
  while (p >= 0) {
      if (s[p--] !== ' ') {
          res++
      } else {
          break
      }
  }
  return res
};